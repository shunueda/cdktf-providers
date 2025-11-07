// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCynosdbAuditLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The end time is in the format of 2017-07-12 10:29:20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#end_time DataTencentcloudCynosdbAuditLogs#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#id DataTencentcloudCynosdbAuditLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#instance_id DataTencentcloudCynosdbAuditLogs#instance_id}
  */
  readonly instanceId: string;
  /**
  * Sort by. The supported values include: ASC - ascending order, DESC - descending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#order DataTencentcloudCynosdbAuditLogs#order}
  */
  readonly order?: string;
  /**
  * Sort fields. The supported values include: timestamp - timestamp; &amp;#39;effectRows&amp;#39; - affects the number of rows; &amp;#39;execTime&amp;#39; - Execution time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#order_by DataTencentcloudCynosdbAuditLogs#order_by}
  */
  readonly orderBy?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#result_output_file DataTencentcloudCynosdbAuditLogs#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Start time, format: 2017-07-12 10:29:20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#start_time DataTencentcloudCynosdbAuditLogs#start_time}
  */
  readonly startTime: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#filter DataTencentcloudCynosdbAuditLogs#filter}
  */
  readonly filter?: DataTencentcloudCynosdbAuditLogsFilter;
}
export interface DataTencentcloudCynosdbAuditLogsItems {
}

export function dataTencentcloudCynosdbAuditLogsItemsToTerraform(struct?: DataTencentcloudCynosdbAuditLogsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbAuditLogsItemsToHclTerraform(struct?: DataTencentcloudCynosdbAuditLogsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbAuditLogsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbAuditLogsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbAuditLogsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // affect_rows - computed: true, optional: false, required: false
  public get affectRows() {
    return this.getNumberAttribute('affect_rows');
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // err_code - computed: true, optional: false, required: false
  public get errCode() {
    return this.getNumberAttribute('err_code');
  }

  // exec_time - computed: true, optional: false, required: false
  public get execTime() {
    return this.getNumberAttribute('exec_time');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // sent_rows - computed: true, optional: false, required: false
  public get sentRows() {
    return this.getNumberAttribute('sent_rows');
  }

  // sql - computed: true, optional: false, required: false
  public get sql() {
    return this.getStringAttribute('sql');
  }

  // sql_type - computed: true, optional: false, required: false
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // thread_id - computed: true, optional: false, required: false
  public get threadId() {
    return this.getNumberAttribute('thread_id');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataTencentcloudCynosdbAuditLogsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbAuditLogsItemsOutputReference {
    return new DataTencentcloudCynosdbAuditLogsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCynosdbAuditLogsFilter {
  /**
  * Affects the number of rows. Indicates that filtering affects audit logs with rows greater than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#affect_rows DataTencentcloudCynosdbAuditLogs#affect_rows}
  */
  readonly affectRows?: number;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#db_name DataTencentcloudCynosdbAuditLogs#db_name}
  */
  readonly dbName?: string[];
  /**
  * Execution time. Unit: ms. Indicates audit logs with a filter execution time greater than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#exec_time DataTencentcloudCynosdbAuditLogs#exec_time}
  */
  readonly execTime?: number;
  /**
  * Client address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#host DataTencentcloudCynosdbAuditLogs#host}
  */
  readonly host?: string[];
  /**
  * Audit policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#policy_name DataTencentcloudCynosdbAuditLogs#policy_name}
  */
  readonly policyName?: string[];
  /**
  * Returns the number of rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#sent_rows DataTencentcloudCynosdbAuditLogs#sent_rows}
  */
  readonly sentRows?: number;
  /**
  * SQL statement. Supports fuzzy matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#sql DataTencentcloudCynosdbAuditLogs#sql}
  */
  readonly sql?: string;
  /**
  * SQL type. Currently supported: SELECT, Insert, UPDATE, DELETE, CREATE, DROP, ALT, SET, REPLACE, EXECUTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#sql_type DataTencentcloudCynosdbAuditLogs#sql_type}
  */
  readonly sqlType?: string;
  /**
  * SQL type. Supports simultaneous querying of multiple types. Currently supported: SELECT, Insert, UPDATE, DELETE, CREATE, DROP, ALT, SET, REPLACE, EXECUTE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#sql_types DataTencentcloudCynosdbAuditLogs#sql_types}
  */
  readonly sqlTypes?: string[];
  /**
  * SQL statement. Supports passing multiple SQL statements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#sqls DataTencentcloudCynosdbAuditLogs#sqls}
  */
  readonly sqls?: string[];
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#table_name DataTencentcloudCynosdbAuditLogs#table_name}
  */
  readonly tableName?: string[];
  /**
  * Thread ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#thread_id DataTencentcloudCynosdbAuditLogs#thread_id}
  */
  readonly threadId?: string[];
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#user DataTencentcloudCynosdbAuditLogs#user}
  */
  readonly user?: string[];
}

export function dataTencentcloudCynosdbAuditLogsFilterToTerraform(struct?: DataTencentcloudCynosdbAuditLogsFilterOutputReference | DataTencentcloudCynosdbAuditLogsFilter): any {
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
    sent_rows: cdktf.numberToTerraform(struct!.sentRows),
    sql: cdktf.stringToTerraform(struct!.sql),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
    sql_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqlTypes),
    sqls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqls),
    table_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableName),
    thread_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.threadId),
    user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.user),
  }
}


export function dataTencentcloudCynosdbAuditLogsFilterToHclTerraform(struct?: DataTencentcloudCynosdbAuditLogsFilterOutputReference | DataTencentcloudCynosdbAuditLogsFilter): any {
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
    sent_rows: {
      value: cdktf.numberToHclTerraform(struct!.sentRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    thread_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.threadId),
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

export class DataTencentcloudCynosdbAuditLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudCynosdbAuditLogsFilter | undefined {
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
    if (this._sentRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentRows = this._sentRows;
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
    if (this._threadId !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadId = this._threadId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbAuditLogsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._affectRows = undefined;
      this._dbName = undefined;
      this._execTime = undefined;
      this._host = undefined;
      this._policyName = undefined;
      this._sentRows = undefined;
      this._sql = undefined;
      this._sqlType = undefined;
      this._sqlTypes = undefined;
      this._sqls = undefined;
      this._tableName = undefined;
      this._threadId = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._affectRows = value.affectRows;
      this._dbName = value.dbName;
      this._execTime = value.execTime;
      this._host = value.host;
      this._policyName = value.policyName;
      this._sentRows = value.sentRows;
      this._sql = value.sql;
      this._sqlType = value.sqlType;
      this._sqlTypes = value.sqlTypes;
      this._sqls = value.sqls;
      this._tableName = value.tableName;
      this._threadId = value.threadId;
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

  // sent_rows - computed: false, optional: true, required: false
  private _sentRows?: number; 
  public get sentRows() {
    return this.getNumberAttribute('sent_rows');
  }
  public set sentRows(value: number) {
    this._sentRows = value;
  }
  public resetSentRows() {
    this._sentRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentRowsInput() {
    return this._sentRows;
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

  // thread_id - computed: false, optional: true, required: false
  private _threadId?: string[]; 
  public get threadId() {
    return cdktf.Fn.tolist(this.getListAttribute('thread_id'));
  }
  public set threadId(value: string[]) {
    this._threadId = value;
  }
  public resetThreadId() {
    this._threadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadIdInput() {
    return this._threadId;
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs tencentcloud_cynosdb_audit_logs}
*/
export class DataTencentcloudCynosdbAuditLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_audit_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCynosdbAuditLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCynosdbAuditLogs to import
  * @param importFromId The id of the existing DataTencentcloudCynosdbAuditLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCynosdbAuditLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_audit_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/cynosdb_audit_logs tencentcloud_cynosdb_audit_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCynosdbAuditLogsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCynosdbAuditLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_audit_logs',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._resultOutputFile = config.resultOutputFile;
    this._startTime = config.startTime;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudCynosdbAuditLogsItemsList(this, "items", false);
  public get items() {
    return this._items;
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
  private _filter = new DataTencentcloudCynosdbAuditLogsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataTencentcloudCynosdbAuditLogsFilter) {
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
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      start_time: cdktf.stringToTerraform(this._startTime),
      filter: dataTencentcloudCynosdbAuditLogsFilterToTerraform(this._filter.internalValue),
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
      filter: {
        value: dataTencentcloudCynosdbAuditLogsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudCynosdbAuditLogsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
