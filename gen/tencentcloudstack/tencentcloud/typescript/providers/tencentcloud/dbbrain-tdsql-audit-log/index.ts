// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbbrainTdsqlAuditLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deadline time, such as `2019-09-11 10:13:14`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#end_time DbbrainTdsqlAuditLog#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#id DbbrainTdsqlAuditLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#instance_id DbbrainTdsqlAuditLog#instance_id}
  */
  readonly instanceId: string;
  /**
  * Consistent with Product. For example: dcdb, mariadb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#node_request_type DbbrainTdsqlAuditLog#node_request_type}
  */
  readonly nodeRequestType: string;
  /**
  * Service product type, supported values include: dcdb - cloud database Tdsql, mariadb - cloud database MariaDB for MariaDB..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#product DbbrainTdsqlAuditLog#product}
  */
  readonly product: string;
  /**
  * Start time, such as `2019-09-10 12:13:14`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#start_time DbbrainTdsqlAuditLog#start_time}
  */
  readonly startTime: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#filter DbbrainTdsqlAuditLog#filter}
  */
  readonly filter?: DbbrainTdsqlAuditLogFilter;
}
export interface DbbrainTdsqlAuditLogFilter {
  /**
  * Number of affected rows. Indicates filtering audit logs whose affected rows are greater than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#affect_rows DbbrainTdsqlAuditLog#affect_rows}
  */
  readonly affectRows?: number;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#db_name DbbrainTdsqlAuditLog#db_name}
  */
  readonly dbName?: string[];
  /**
  * Execution time. The unit is: us. It means to filter the audit logs whose execution time is greater than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#exec_time DbbrainTdsqlAuditLog#exec_time}
  */
  readonly execTime?: number;
  /**
  * Client Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#host DbbrainTdsqlAuditLog#host}
  */
  readonly host?: string[];
  /**
  * Return the number of rows. It means to filter the audit log with the number of returned rows greater than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#sent_rows DbbrainTdsqlAuditLog#sent_rows}
  */
  readonly sentRows?: number;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#user DbbrainTdsqlAuditLog#user}
  */
  readonly user?: string[];
}

export function dbbrainTdsqlAuditLogFilterToTerraform(struct?: DbbrainTdsqlAuditLogFilterOutputReference | DbbrainTdsqlAuditLogFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affect_rows: cdktf.numberToTerraform(struct!.affectRows),
    db_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbName),
    exec_time: cdktf.numberToTerraform(struct!.execTime),
    host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.host),
    sent_rows: cdktf.numberToTerraform(struct!.sentRows),
    user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.user),
  }
}


export function dbbrainTdsqlAuditLogFilterToHclTerraform(struct?: DbbrainTdsqlAuditLogFilterOutputReference | DbbrainTdsqlAuditLogFilter): any {
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
    sent_rows: {
      value: cdktf.numberToHclTerraform(struct!.sentRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DbbrainTdsqlAuditLogFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbbrainTdsqlAuditLogFilter | undefined {
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
    if (this._sentRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentRows = this._sentRows;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbbrainTdsqlAuditLogFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._affectRows = undefined;
      this._dbName = undefined;
      this._execTime = undefined;
      this._host = undefined;
      this._sentRows = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._affectRows = value.affectRows;
      this._dbName = value.dbName;
      this._execTime = value.execTime;
      this._host = value.host;
      this._sentRows = value.sentRows;
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log tencentcloud_dbbrain_tdsql_audit_log}
*/
export class DbbrainTdsqlAuditLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_tdsql_audit_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbbrainTdsqlAuditLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbbrainTdsqlAuditLog to import
  * @param importFromId The id of the existing DbbrainTdsqlAuditLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbbrainTdsqlAuditLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_tdsql_audit_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_tdsql_audit_log tencentcloud_dbbrain_tdsql_audit_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbbrainTdsqlAuditLogConfig
  */
  public constructor(scope: Construct, id: string, config: DbbrainTdsqlAuditLogConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_tdsql_audit_log',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._nodeRequestType = config.nodeRequestType;
    this._product = config.product;
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

  // node_request_type - computed: false, optional: false, required: true
  private _nodeRequestType?: string; 
  public get nodeRequestType() {
    return this.getStringAttribute('node_request_type');
  }
  public set nodeRequestType(value: string) {
    this._nodeRequestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRequestTypeInput() {
    return this._nodeRequestType;
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
  private _filter = new DbbrainTdsqlAuditLogFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DbbrainTdsqlAuditLogFilter) {
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
      node_request_type: cdktf.stringToTerraform(this._nodeRequestType),
      product: cdktf.stringToTerraform(this._product),
      start_time: cdktf.stringToTerraform(this._startTime),
      filter: dbbrainTdsqlAuditLogFilterToTerraform(this._filter.internalValue),
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
      node_request_type: {
        value: cdktf.stringToHclTerraform(this._nodeRequestType),
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dbbrainTdsqlAuditLogFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbbrainTdsqlAuditLogFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
