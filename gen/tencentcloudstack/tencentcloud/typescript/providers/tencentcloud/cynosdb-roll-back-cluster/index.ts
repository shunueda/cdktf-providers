// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbRollBackClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#cluster_id CynosdbRollBackCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Expected rollback Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#expect_time CynosdbRollBackCluster#expect_time}
  */
  readonly expectTime?: string;
  /**
  * Expected Threshold (Obsolete).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#expect_time_thresh CynosdbRollBackCluster#expect_time_thresh}
  */
  readonly expectTimeThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#id CynosdbRollBackCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rollback ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#rollback_id CynosdbRollBackCluster#rollback_id}
  */
  readonly rollbackId: number;
  /**
  * Rollback mode by time point, full: normal; Db: fast; Table: Extreme speed (default is normal).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#rollback_mode CynosdbRollBackCluster#rollback_mode}
  */
  readonly rollbackMode?: string;
  /**
  * Backfile policy timeRollback - Backfile by point in time snapRollback - Backfile by backup file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#rollback_strategy CynosdbRollBackCluster#rollback_strategy}
  */
  readonly rollbackStrategy: string;
  /**
  * rollback_databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#rollback_databases CynosdbRollBackCluster#rollback_databases}
  */
  readonly rollbackDatabases?: CynosdbRollBackClusterRollbackDatabases[] | cdktf.IResolvable;
  /**
  * rollback_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#rollback_tables CynosdbRollBackCluster#rollback_tables}
  */
  readonly rollbackTables?: CynosdbRollBackClusterRollbackTables[] | cdktf.IResolvable;
}
export interface CynosdbRollBackClusterRollbackDatabases {
  /**
  * New database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#new_database CynosdbRollBackCluster#new_database}
  */
  readonly newDatabase: string;
  /**
  * Old database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#old_database CynosdbRollBackCluster#old_database}
  */
  readonly oldDatabase: string;
}

export function cynosdbRollBackClusterRollbackDatabasesToTerraform(struct?: CynosdbRollBackClusterRollbackDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_database: cdktf.stringToTerraform(struct!.newDatabase),
    old_database: cdktf.stringToTerraform(struct!.oldDatabase),
  }
}


export function cynosdbRollBackClusterRollbackDatabasesToHclTerraform(struct?: CynosdbRollBackClusterRollbackDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_database: {
      value: cdktf.stringToHclTerraform(struct!.newDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_database: {
      value: cdktf.stringToHclTerraform(struct!.oldDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbRollBackClusterRollbackDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbRollBackClusterRollbackDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.newDatabase = this._newDatabase;
    }
    if (this._oldDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldDatabase = this._oldDatabase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbRollBackClusterRollbackDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newDatabase = undefined;
      this._oldDatabase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newDatabase = value.newDatabase;
      this._oldDatabase = value.oldDatabase;
    }
  }

  // new_database - computed: false, optional: false, required: true
  private _newDatabase?: string; 
  public get newDatabase() {
    return this.getStringAttribute('new_database');
  }
  public set newDatabase(value: string) {
    this._newDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newDatabaseInput() {
    return this._newDatabase;
  }

  // old_database - computed: false, optional: false, required: true
  private _oldDatabase?: string; 
  public get oldDatabase() {
    return this.getStringAttribute('old_database');
  }
  public set oldDatabase(value: string) {
    this._oldDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldDatabaseInput() {
    return this._oldDatabase;
  }
}

export class CynosdbRollBackClusterRollbackDatabasesList extends cdktf.ComplexList {
  public internalValue? : CynosdbRollBackClusterRollbackDatabases[] | cdktf.IResolvable

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
  public get(index: number): CynosdbRollBackClusterRollbackDatabasesOutputReference {
    return new CynosdbRollBackClusterRollbackDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CynosdbRollBackClusterRollbackTablesTables {
  /**
  * New table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#new_table CynosdbRollBackCluster#new_table}
  */
  readonly newTable: string;
  /**
  * Old table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#old_table CynosdbRollBackCluster#old_table}
  */
  readonly oldTable: string;
}

export function cynosdbRollBackClusterRollbackTablesTablesToTerraform(struct?: CynosdbRollBackClusterRollbackTablesTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_table: cdktf.stringToTerraform(struct!.newTable),
    old_table: cdktf.stringToTerraform(struct!.oldTable),
  }
}


export function cynosdbRollBackClusterRollbackTablesTablesToHclTerraform(struct?: CynosdbRollBackClusterRollbackTablesTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_table: {
      value: cdktf.stringToHclTerraform(struct!.newTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_table: {
      value: cdktf.stringToHclTerraform(struct!.oldTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbRollBackClusterRollbackTablesTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbRollBackClusterRollbackTablesTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTable = this._newTable;
    }
    if (this._oldTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldTable = this._oldTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbRollBackClusterRollbackTablesTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newTable = undefined;
      this._oldTable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newTable = value.newTable;
      this._oldTable = value.oldTable;
    }
  }

  // new_table - computed: false, optional: false, required: true
  private _newTable?: string; 
  public get newTable() {
    return this.getStringAttribute('new_table');
  }
  public set newTable(value: string) {
    this._newTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newTableInput() {
    return this._newTable;
  }

  // old_table - computed: false, optional: false, required: true
  private _oldTable?: string; 
  public get oldTable() {
    return this.getStringAttribute('old_table');
  }
  public set oldTable(value: string) {
    this._oldTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldTableInput() {
    return this._oldTable;
  }
}

export class CynosdbRollBackClusterRollbackTablesTablesList extends cdktf.ComplexList {
  public internalValue? : CynosdbRollBackClusterRollbackTablesTables[] | cdktf.IResolvable

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
  public get(index: number): CynosdbRollBackClusterRollbackTablesTablesOutputReference {
    return new CynosdbRollBackClusterRollbackTablesTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CynosdbRollBackClusterRollbackTables {
  /**
  * New database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#database CynosdbRollBackCluster#database}
  */
  readonly database: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#tables CynosdbRollBackCluster#tables}
  */
  readonly tables: CynosdbRollBackClusterRollbackTablesTables[] | cdktf.IResolvable;
}

export function cynosdbRollBackClusterRollbackTablesToTerraform(struct?: CynosdbRollBackClusterRollbackTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    tables: cdktf.listMapper(cynosdbRollBackClusterRollbackTablesTablesToTerraform, true)(struct!.tables),
  }
}


export function cynosdbRollBackClusterRollbackTablesToHclTerraform(struct?: CynosdbRollBackClusterRollbackTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktf.listMapperHcl(cynosdbRollBackClusterRollbackTablesTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "CynosdbRollBackClusterRollbackTablesTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CynosdbRollBackClusterRollbackTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CynosdbRollBackClusterRollbackTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CynosdbRollBackClusterRollbackTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._tables.internalValue = value.tables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // tables - computed: false, optional: false, required: true
  private _tables = new CynosdbRollBackClusterRollbackTablesTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: CynosdbRollBackClusterRollbackTablesTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class CynosdbRollBackClusterRollbackTablesList extends cdktf.ComplexList {
  public internalValue? : CynosdbRollBackClusterRollbackTables[] | cdktf.IResolvable

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
  public get(index: number): CynosdbRollBackClusterRollbackTablesOutputReference {
    return new CynosdbRollBackClusterRollbackTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster tencentcloud_cynosdb_roll_back_cluster}
*/
export class CynosdbRollBackCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_roll_back_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbRollBackCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbRollBackCluster to import
  * @param importFromId The id of the existing CynosdbRollBackCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbRollBackCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_roll_back_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cynosdb_roll_back_cluster tencentcloud_cynosdb_roll_back_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbRollBackClusterConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbRollBackClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_roll_back_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._expectTime = config.expectTime;
    this._expectTimeThresh = config.expectTimeThresh;
    this._id = config.id;
    this._rollbackId = config.rollbackId;
    this._rollbackMode = config.rollbackMode;
    this._rollbackStrategy = config.rollbackStrategy;
    this._rollbackDatabases.internalValue = config.rollbackDatabases;
    this._rollbackTables.internalValue = config.rollbackTables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // expect_time - computed: false, optional: true, required: false
  private _expectTime?: string; 
  public get expectTime() {
    return this.getStringAttribute('expect_time');
  }
  public set expectTime(value: string) {
    this._expectTime = value;
  }
  public resetExpectTime() {
    this._expectTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectTimeInput() {
    return this._expectTime;
  }

  // expect_time_thresh - computed: false, optional: true, required: false
  private _expectTimeThresh?: number; 
  public get expectTimeThresh() {
    return this.getNumberAttribute('expect_time_thresh');
  }
  public set expectTimeThresh(value: number) {
    this._expectTimeThresh = value;
  }
  public resetExpectTimeThresh() {
    this._expectTimeThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectTimeThreshInput() {
    return this._expectTimeThresh;
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

  // rollback_id - computed: false, optional: false, required: true
  private _rollbackId?: number; 
  public get rollbackId() {
    return this.getNumberAttribute('rollback_id');
  }
  public set rollbackId(value: number) {
    this._rollbackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackIdInput() {
    return this._rollbackId;
  }

  // rollback_mode - computed: false, optional: true, required: false
  private _rollbackMode?: string; 
  public get rollbackMode() {
    return this.getStringAttribute('rollback_mode');
  }
  public set rollbackMode(value: string) {
    this._rollbackMode = value;
  }
  public resetRollbackMode() {
    this._rollbackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackModeInput() {
    return this._rollbackMode;
  }

  // rollback_strategy - computed: false, optional: false, required: true
  private _rollbackStrategy?: string; 
  public get rollbackStrategy() {
    return this.getStringAttribute('rollback_strategy');
  }
  public set rollbackStrategy(value: string) {
    this._rollbackStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackStrategyInput() {
    return this._rollbackStrategy;
  }

  // rollback_databases - computed: false, optional: true, required: false
  private _rollbackDatabases = new CynosdbRollBackClusterRollbackDatabasesList(this, "rollback_databases", false);
  public get rollbackDatabases() {
    return this._rollbackDatabases;
  }
  public putRollbackDatabases(value: CynosdbRollBackClusterRollbackDatabases[] | cdktf.IResolvable) {
    this._rollbackDatabases.internalValue = value;
  }
  public resetRollbackDatabases() {
    this._rollbackDatabases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackDatabasesInput() {
    return this._rollbackDatabases.internalValue;
  }

  // rollback_tables - computed: false, optional: true, required: false
  private _rollbackTables = new CynosdbRollBackClusterRollbackTablesList(this, "rollback_tables", false);
  public get rollbackTables() {
    return this._rollbackTables;
  }
  public putRollbackTables(value: CynosdbRollBackClusterRollbackTables[] | cdktf.IResolvable) {
    this._rollbackTables.internalValue = value;
  }
  public resetRollbackTables() {
    this._rollbackTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackTablesInput() {
    return this._rollbackTables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      expect_time: cdktf.stringToTerraform(this._expectTime),
      expect_time_thresh: cdktf.numberToTerraform(this._expectTimeThresh),
      id: cdktf.stringToTerraform(this._id),
      rollback_id: cdktf.numberToTerraform(this._rollbackId),
      rollback_mode: cdktf.stringToTerraform(this._rollbackMode),
      rollback_strategy: cdktf.stringToTerraform(this._rollbackStrategy),
      rollback_databases: cdktf.listMapper(cynosdbRollBackClusterRollbackDatabasesToTerraform, true)(this._rollbackDatabases.internalValue),
      rollback_tables: cdktf.listMapper(cynosdbRollBackClusterRollbackTablesToTerraform, true)(this._rollbackTables.internalValue),
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
      expect_time: {
        value: cdktf.stringToHclTerraform(this._expectTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expect_time_thresh: {
        value: cdktf.numberToHclTerraform(this._expectTimeThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollback_id: {
        value: cdktf.numberToHclTerraform(this._rollbackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rollback_mode: {
        value: cdktf.stringToHclTerraform(this._rollbackMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollback_strategy: {
        value: cdktf.stringToHclTerraform(this._rollbackStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollback_databases: {
        value: cdktf.listMapperHcl(cynosdbRollBackClusterRollbackDatabasesToHclTerraform, true)(this._rollbackDatabases.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CynosdbRollBackClusterRollbackDatabasesList",
      },
      rollback_tables: {
        value: cdktf.listMapperHcl(cynosdbRollBackClusterRollbackTablesToHclTerraform, true)(this._rollbackTables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CynosdbRollBackClusterRollbackTablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
