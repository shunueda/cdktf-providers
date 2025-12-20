// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlAccountPrivilegesOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance ID in the format of postgres-4wdeb0zv.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#db_instance_id PostgresqlAccountPrivilegesOperation#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#id PostgresqlAccountPrivilegesOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#user_name PostgresqlAccountPrivilegesOperation#user_name}
  */
  readonly userName: string;
  /**
  * modify_privilege_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#modify_privilege_set PostgresqlAccountPrivilegesOperation#modify_privilege_set}
  */
  readonly modifyPrivilegeSet: PostgresqlAccountPrivilegesOperationModifyPrivilegeSet[] | cdktf.IResolvable;
}
export interface PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObject {
  /**
  * Database name to which the database object belongs. This parameter is mandatory when ObjectType is not database. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#database_name PostgresqlAccountPrivilegesOperation#database_name}
  */
  readonly databaseName?: string;
  /**
  * Database object Name. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#object_name PostgresqlAccountPrivilegesOperation#object_name}
  */
  readonly objectName: string;
  /**
  * Supported database object types: account, database, schema, sequence, procedure, type, function, table, view, matview, column. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#object_type PostgresqlAccountPrivilegesOperation#object_type}
  */
  readonly objectType: string;
  /**
  * Schema name to which the database object belongs. This parameter is mandatory when ObjectType is not database or schema. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#schema_name PostgresqlAccountPrivilegesOperation#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Table name to which the database object belongs. This parameter is mandatory when ObjectType is column. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#table_name PostgresqlAccountPrivilegesOperation#table_name}
  */
  readonly tableName?: string;
}

export function postgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObjectToTerraform(struct?: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObjectOutputReference | PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    object_name: cdktf.stringToTerraform(struct!.objectName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function postgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObjectToHclTerraform(struct?: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObjectOutputReference | PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObject): any {
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
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._objectName = undefined;
      this._objectType = undefined;
      this._schemaName = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._objectName = value.objectName;
      this._objectType = value.objectType;
      this._schemaName = value.schemaName;
      this._tableName = value.tableName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilege {
  /**
  * Privileges the specific account has on database object. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#privilege_set PostgresqlAccountPrivilegesOperation#privilege_set}
  */
  readonly privilegeSet?: string[];
  /**
  * object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#object PostgresqlAccountPrivilegesOperation#object}
  */
  readonly object?: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObject;
}

export function postgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeToTerraform(struct?: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeOutputReference | PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilege): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privilege_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privilegeSet),
    object: postgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObjectToTerraform(struct!.object),
  }
}


export function postgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeToHclTerraform(struct?: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeOutputReference | PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilege): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privilege_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privilegeSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    object: {
      value: postgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "list",
      storageClassType: "PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilege | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privilegeSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeSet = this._privilegeSet;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilege | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privilegeSet = undefined;
      this._object.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privilegeSet = value.privilegeSet;
      this._object.internalValue = value.object;
    }
  }

  // privilege_set - computed: false, optional: true, required: false
  private _privilegeSet?: string[]; 
  public get privilegeSet() {
    return cdktf.Fn.tolist(this.getListAttribute('privilege_set'));
  }
  public set privilegeSet(value: string[]) {
    this._privilegeSet = value;
  }
  public resetPrivilegeSet() {
    this._privilegeSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeSetInput() {
    return this._privilegeSet;
  }

  // object - computed: false, optional: true, required: false
  private _object = new PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeObject) {
    this._object.internalValue = value;
  }
  public resetObject() {
    this._object.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }
}
export interface PostgresqlAccountPrivilegesOperationModifyPrivilegeSet {
  /**
  * Required only when ModifyType is revokeObject. When the parameter is true, revoking permissions will cascade. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#is_cascade PostgresqlAccountPrivilegesOperation#is_cascade}
  */
  readonly isCascade?: boolean | cdktf.IResolvable;
  /**
  * Supported modification method: grantObject, revokeObject, alterRole. grantObject represents granting permissions on object, revokeObject represents revoking permissions on object, and alterRole represents modifying the account type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#modify_type PostgresqlAccountPrivilegesOperation#modify_type}
  */
  readonly modifyType?: string;
  /**
  * database_privilege block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#database_privilege PostgresqlAccountPrivilegesOperation#database_privilege}
  */
  readonly databasePrivilege?: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilege;
}

export function postgresqlAccountPrivilegesOperationModifyPrivilegeSetToTerraform(struct?: PostgresqlAccountPrivilegesOperationModifyPrivilegeSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_cascade: cdktf.booleanToTerraform(struct!.isCascade),
    modify_type: cdktf.stringToTerraform(struct!.modifyType),
    database_privilege: postgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeToTerraform(struct!.databasePrivilege),
  }
}


export function postgresqlAccountPrivilegesOperationModifyPrivilegeSetToHclTerraform(struct?: PostgresqlAccountPrivilegesOperationModifyPrivilegeSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_cascade: {
      value: cdktf.booleanToHclTerraform(struct!.isCascade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modify_type: {
      value: cdktf.stringToHclTerraform(struct!.modifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_privilege: {
      value: postgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeToHclTerraform(struct!.databasePrivilege),
      isBlock: true,
      type: "list",
      storageClassType: "PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresqlAccountPrivilegesOperationModifyPrivilegeSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostgresqlAccountPrivilegesOperationModifyPrivilegeSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isCascade !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCascade = this._isCascade;
    }
    if (this._modifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyType = this._modifyType;
    }
    if (this._databasePrivilege?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databasePrivilege = this._databasePrivilege?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlAccountPrivilegesOperationModifyPrivilegeSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isCascade = undefined;
      this._modifyType = undefined;
      this._databasePrivilege.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isCascade = value.isCascade;
      this._modifyType = value.modifyType;
      this._databasePrivilege.internalValue = value.databasePrivilege;
    }
  }

  // is_cascade - computed: false, optional: true, required: false
  private _isCascade?: boolean | cdktf.IResolvable; 
  public get isCascade() {
    return this.getBooleanAttribute('is_cascade');
  }
  public set isCascade(value: boolean | cdktf.IResolvable) {
    this._isCascade = value;
  }
  public resetIsCascade() {
    this._isCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCascadeInput() {
    return this._isCascade;
  }

  // modify_type - computed: false, optional: true, required: false
  private _modifyType?: string; 
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
  public set modifyType(value: string) {
    this._modifyType = value;
  }
  public resetModifyType() {
    this._modifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTypeInput() {
    return this._modifyType;
  }

  // database_privilege - computed: false, optional: true, required: false
  private _databasePrivilege = new PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilegeOutputReference(this, "database_privilege");
  public get databasePrivilege() {
    return this._databasePrivilege;
  }
  public putDatabasePrivilege(value: PostgresqlAccountPrivilegesOperationModifyPrivilegeSetDatabasePrivilege) {
    this._databasePrivilege.internalValue = value;
  }
  public resetDatabasePrivilege() {
    this._databasePrivilege.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePrivilegeInput() {
    return this._databasePrivilege.internalValue;
  }
}

export class PostgresqlAccountPrivilegesOperationModifyPrivilegeSetList extends cdktf.ComplexList {
  public internalValue? : PostgresqlAccountPrivilegesOperationModifyPrivilegeSet[] | cdktf.IResolvable

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
  public get(index: number): PostgresqlAccountPrivilegesOperationModifyPrivilegeSetOutputReference {
    return new PostgresqlAccountPrivilegesOperationModifyPrivilegeSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation tencentcloud_postgresql_account_privileges_operation}
*/
export class PostgresqlAccountPrivilegesOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_account_privileges_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlAccountPrivilegesOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlAccountPrivilegesOperation to import
  * @param importFromId The id of the existing PostgresqlAccountPrivilegesOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlAccountPrivilegesOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_account_privileges_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_account_privileges_operation tencentcloud_postgresql_account_privileges_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlAccountPrivilegesOperationConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlAccountPrivilegesOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_account_privileges_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._userName = config.userName;
    this._modifyPrivilegeSet.internalValue = config.modifyPrivilegeSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // modify_privilege_set - computed: false, optional: false, required: true
  private _modifyPrivilegeSet = new PostgresqlAccountPrivilegesOperationModifyPrivilegeSetList(this, "modify_privilege_set", false);
  public get modifyPrivilegeSet() {
    return this._modifyPrivilegeSet;
  }
  public putModifyPrivilegeSet(value: PostgresqlAccountPrivilegesOperationModifyPrivilegeSet[] | cdktf.IResolvable) {
    this._modifyPrivilegeSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyPrivilegeSetInput() {
    return this._modifyPrivilegeSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      user_name: cdktf.stringToTerraform(this._userName),
      modify_privilege_set: cdktf.listMapper(postgresqlAccountPrivilegesOperationModifyPrivilegeSetToTerraform, true)(this._modifyPrivilegeSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_privilege_set: {
        value: cdktf.listMapperHcl(postgresqlAccountPrivilegesOperationModifyPrivilegeSetToHclTerraform, true)(this._modifyPrivilegeSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PostgresqlAccountPrivilegesOperationModifyPrivilegeSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
