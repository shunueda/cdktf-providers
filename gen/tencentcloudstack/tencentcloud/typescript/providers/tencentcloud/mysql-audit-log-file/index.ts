// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlAuditLogFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#end_time MysqlAuditLogFile#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#id MysqlAuditLogFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#instance_id MysqlAuditLogFile#instance_id}
  */
  readonly instanceId: string;
  /**
  * Sort by. supported values are: `ASC`- ascending order, `DESC`- descending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#order MysqlAuditLogFile#order}
  */
  readonly order?: string;
  /**
  * Sort field. supported values include:`timestamp` - timestamp; `affectRows` - affected rows; `execTime` - execution time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#order_by MysqlAuditLogFile#order_by}
  */
  readonly orderBy?: string;
  /**
  * start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#start_time MysqlAuditLogFile#start_time}
  */
  readonly startTime: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#filter MysqlAuditLogFile#filter}
  */
  readonly filter?: MysqlAuditLogFileFilter;
}
export interface MysqlAuditLogFileFilter {
  /**
  * Affects the number of rows. Indicates to filter audit logs whose number of affected rows is greater than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#affect_rows MysqlAuditLogFile#affect_rows}
  */
  readonly affectRows?: number;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#db_name MysqlAuditLogFile#db_name}
  */
  readonly dbName?: string[];
  /**
  * Execution time. The unit is: ms. Indicates to filter audit logs whose execution time is greater than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#exec_time MysqlAuditLogFile#exec_time}
  */
  readonly execTime?: number;
  /**
  * Client address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#host MysqlAuditLogFile#host}
  */
  readonly host?: string[];
  /**
  * The name of policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#policy_name MysqlAuditLogFile#policy_name}
  */
  readonly policyName?: string[];
  /**
  * SQL statement. support fuzzy matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#sql MysqlAuditLogFile#sql}
  */
  readonly sql?: string;
  /**
  * SQL type. Currently supported: SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, ALTER, SET, REPLACE, EXECUTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#sql_type MysqlAuditLogFile#sql_type}
  */
  readonly sqlType?: string;
  /**
  * SQL type. Supports simultaneous query of multiple types. Currently supported: SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, ALTER, SET, REPLACE, EXECUTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#sql_types MysqlAuditLogFile#sql_types}
  */
  readonly sqlTypes?: string[];
  /**
  * SQL statement. Support passing multiple sql statements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#sqls MysqlAuditLogFile#sqls}
  */
  readonly sqls?: string[];
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#table_name MysqlAuditLogFile#table_name}
  */
  readonly tableName?: string[];
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#user MysqlAuditLogFile#user}
  */
  readonly user?: string[];
}

export function mysqlAuditLogFileFilterToTerraform(struct?: MysqlAuditLogFileFilterOutputReference | MysqlAuditLogFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affect_rows: cdktf.numberToTerraform(struct!.affectRows),
    db_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbName),
    exec_time: cdktf.numberToTerraform(struct!.execTime),
    host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.host),
    policy_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyName),
    sql: cdktf.stringToTerraform(struct!.sql),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
    sql_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqlTypes),
    sqls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqls),
    table_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableName),
    user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.user),
  }
}


export function mysqlAuditLogFileFilterToHclTerraform(struct?: MysqlAuditLogFileFilterOutputReference | MysqlAuditLogFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affect_rows: {
      value: cdktf.numberToHclTerraform(struct!.affectRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exec_time: {
      value: cdktf.numberToHclTerraform(struct!.execTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.host),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sql: {
      value: cdktf.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_type: {
      value: cdktf.stringToHclTerraform(struct!.sqlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqlTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sqls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    table_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tableName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.user),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlAuditLogFileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlAuditLogFileFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affectRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.affectRows = this._affectRows;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._execTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.execTime = this._execTime;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    if (this._sqlTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlTypes = this._sqlTypes;
    }
    if (this._sqls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqls = this._sqls;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlAuditLogFileFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._affectRows = undefined;
      this._dbName = undefined;
      this._execTime = undefined;
      this._host = undefined;
      this._policyName = undefined;
      this._sql = undefined;
      this._sqlType = undefined;
      this._sqlTypes = undefined;
      this._sqls = undefined;
      this._tableName = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._affectRows = value.affectRows;
      this._dbName = value.dbName;
      this._execTime = value.execTime;
      this._host = value.host;
      this._policyName = value.policyName;
      this._sql = value.sql;
      this._sqlType = value.sqlType;
      this._sqlTypes = value.sqlTypes;
      this._sqls = value.sqls;
      this._tableName = value.tableName;
      this._user = value.user;
    }
  }

  // affect_rows - computed: false, optional: true, required: false
  private _affectRows?: number; 
  public get affectRows() {
    return this.getNumberAttribute('affect_rows');
  }
  public set affectRows(value: number) {
    this._affectRows = value;
  }
  public resetAffectRows() {
    this._affectRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affectRowsInput() {
    return this._affectRows;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string[]; 
  public get dbName() {
    return cdktf.Fn.tolist(this.getListAttribute('db_name'));
  }
  public set dbName(value: string[]) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // exec_time - computed: false, optional: true, required: false
  private _execTime?: number; 
  public get execTime() {
    return this.getNumberAttribute('exec_time');
  }
  public set execTime(value: number) {
    this._execTime = value;
  }
  public resetExecTime() {
    this._execTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execTimeInput() {
    return this._execTime;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string[]; 
  public get host() {
    return cdktf.Fn.tolist(this.getListAttribute('host'));
  }
  public set host(value: string[]) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string[]; 
  public get policyName() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_name'));
  }
  public set policyName(value: string[]) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // sql - computed: false, optional: true, required: false
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  public resetSql() {
    this._sql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // sql_type - computed: false, optional: true, required: false
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  public resetSqlType() {
    this._sqlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }

  // sql_types - computed: false, optional: true, required: false
  private _sqlTypes?: string[]; 
  public get sqlTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('sql_types'));
  }
  public set sqlTypes(value: string[]) {
    this._sqlTypes = value;
  }
  public resetSqlTypes() {
    this._sqlTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypesInput() {
    return this._sqlTypes;
  }

  // sqls - computed: false, optional: true, required: false
  private _sqls?: string[]; 
  public get sqls() {
    return cdktf.Fn.tolist(this.getListAttribute('sqls'));
  }
  public set sqls(value: string[]) {
    this._sqls = value;
  }
  public resetSqls() {
    this._sqls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlsInput() {
    return this._sqls;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string[]; 
  public get tableName() {
    return cdktf.Fn.tolist(this.getListAttribute('table_name'));
  }
  public set tableName(value: string[]) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file tencentcloud_mysql_audit_log_file}
*/
export class MysqlAuditLogFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_audit_log_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlAuditLogFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlAuditLogFile to import
  * @param importFromId The id of the existing MysqlAuditLogFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlAuditLogFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_audit_log_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_audit_log_file tencentcloud_mysql_audit_log_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlAuditLogFileConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlAuditLogFileConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_audit_log_file',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._order = config.order;
    this._orderBy = config.orderBy;
    this._startTime = config.startTime;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // download_url - computed: true, optional: false, required: false
  public get downloadUrl() {
    return this.getStringAttribute('download_url');
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

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
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

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new MysqlAuditLogFileFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: MysqlAuditLogFileFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      order: cdktf.stringToTerraform(this._order),
      order_by: cdktf.stringToTerraform(this._orderBy),
      start_time: cdktf.stringToTerraform(this._startTime),
      filter: mysqlAuditLogFileFilterToTerraform(this._filter.internalValue),
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
      order: {
        value: cdktf.stringToHclTerraform(this._order),
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: mysqlAuditLogFileFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlAuditLogFileFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
