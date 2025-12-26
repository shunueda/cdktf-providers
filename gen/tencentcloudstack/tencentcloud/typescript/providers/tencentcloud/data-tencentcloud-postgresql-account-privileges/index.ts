// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudPostgresqlAccountPrivilegesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#db_instance_id DataTencentcloudPostgresqlAccountPrivileges#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#id DataTencentcloudPostgresqlAccountPrivileges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#result_output_file DataTencentcloudPostgresqlAccountPrivileges#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Instance username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#user_name DataTencentcloudPostgresqlAccountPrivileges#user_name}
  */
  readonly userName: string;
  /**
  * database_object_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#database_object_set DataTencentcloudPostgresqlAccountPrivileges#database_object_set}
  */
  readonly databaseObjectSet: DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSet[] | cdktf.IResolvable;
}
export interface DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObject {
}

export function dataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObjectToTerraform(struct?: DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObjectToHclTerraform(struct?: DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObject | undefined) {
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

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObjectOutputReference {
    return new DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSet {
}

export function dataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetToTerraform(struct?: DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetToHclTerraform(struct?: DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object - computed: true, optional: false, required: false
  private _object = new DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetObjectList(this, "object", false);
  public get object() {
    return this._object;
  }

  // privilege_set - computed: true, optional: false, required: false
  public get privilegeSet() {
    return cdktf.Fn.tolist(this.getListAttribute('privilege_set'));
  }
}

export class DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetOutputReference {
    return new DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSet {
  /**
  * Database name to which the database object belongs. This parameter is mandatory when ObjectType is not database.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#database_name DataTencentcloudPostgresqlAccountPrivileges#database_name}
  */
  readonly databaseName?: string;
  /**
  * Database object Name.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#object_name DataTencentcloudPostgresqlAccountPrivileges#object_name}
  */
  readonly objectName: string;
  /**
  * Supported database object types: account, database, schema, sequence, procedure, type, function, table, view, matview, column. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#object_type DataTencentcloudPostgresqlAccountPrivileges#object_type}
  */
  readonly objectType: string;
  /**
  * Schema name to which the database object belongs. This parameter is mandatory when ObjectType is not database or schema.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#schema_name DataTencentcloudPostgresqlAccountPrivileges#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Table name to which the database object belongs. This parameter is mandatory when ObjectType is column.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#table_name DataTencentcloudPostgresqlAccountPrivileges#table_name}
  */
  readonly tableName?: string;
}

export function dataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetToTerraform(struct?: DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSet | cdktf.IResolvable): any {
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


export function dataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetToHclTerraform(struct?: DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSet | cdktf.IResolvable): any {
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

export class DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._objectName = undefined;
      this._objectType = undefined;
      this._schemaName = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSet[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetOutputReference {
    return new DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges tencentcloud_postgresql_account_privileges}
*/
export class DataTencentcloudPostgresqlAccountPrivileges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_account_privileges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudPostgresqlAccountPrivileges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudPostgresqlAccountPrivileges to import
  * @param importFromId The id of the existing DataTencentcloudPostgresqlAccountPrivileges that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudPostgresqlAccountPrivileges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_account_privileges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/postgresql_account_privileges tencentcloud_postgresql_account_privileges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudPostgresqlAccountPrivilegesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudPostgresqlAccountPrivilegesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_account_privileges',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._resultOutputFile = config.resultOutputFile;
    this._userName = config.userName;
    this._databaseObjectSet.internalValue = config.databaseObjectSet;
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

  // privilege_set - computed: true, optional: false, required: false
  private _privilegeSet = new DataTencentcloudPostgresqlAccountPrivilegesPrivilegeSetList(this, "privilege_set", false);
  public get privilegeSet() {
    return this._privilegeSet;
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

  // database_object_set - computed: false, optional: false, required: true
  private _databaseObjectSet = new DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetList(this, "database_object_set", false);
  public get databaseObjectSet() {
    return this._databaseObjectSet;
  }
  public putDatabaseObjectSet(value: DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSet[] | cdktf.IResolvable) {
    this._databaseObjectSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseObjectSetInput() {
    return this._databaseObjectSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      user_name: cdktf.stringToTerraform(this._userName),
      database_object_set: cdktf.listMapper(dataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetToTerraform, true)(this._databaseObjectSet.internalValue),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
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
      database_object_set: {
        value: cdktf.listMapperHcl(dataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetToHclTerraform, true)(this._databaseObjectSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudPostgresqlAccountPrivilegesDatabaseObjectSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
