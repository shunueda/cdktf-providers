// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the managed backup from which data will be restored. If this value is not set, the restore job uses the most recent available backup on the source cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#backup_id Restore#backup_id}
  */
  readonly backupId?: string;
  /**
  * ID of the cluster where the backup will be restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#destination_cluster_id Restore#destination_cluster_id}
  */
  readonly destinationClusterId: string;
  /**
  * Additional options controlling the behavior of the restore job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#restore_opts Restore#restore_opts}
  */
  readonly restoreOpts?: RestoreRestoreOpts;
  /**
  * ID of the source cluster containing the managed backup to be restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#source_cluster_id Restore#source_cluster_id}
  */
  readonly sourceClusterId?: string;
  /**
  * Type describes the scope of the restore job. When using a DATABASE or TABLE restore, additional details must be passed in the objects attribute. Allowed values are: `CLUSTER` or `DATABASE` or `TABLE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#type Restore#type}
  */
  readonly type: string;
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#objects Restore#objects}
  */
  readonly objects?: RestoreObjects[] | cdktf.IResolvable;
}
export interface RestoreRestoreOpts {
  /**
  * Optionally specifies a target database to restore the table into during a table restore job. If not set, the table is restored into the database it belonged to in the source backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#into_db Restore#into_db}
  */
  readonly intoDb?: string;
  /**
  * Optionally specifies the name of a new database to create as the target of a database restore job. If not set, the name defaults to the original database name from the source cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#new_db_name Restore#new_db_name}
  */
  readonly newDbName?: string;
  /**
  * If set, only the schema without any user data is restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#schema_only Restore#schema_only}
  */
  readonly schemaOnly?: boolean | cdktf.IResolvable;
  /**
  * Allows the restore job to continue in the event that there are mismatched localities between the backup and target cluster. Useful when restoring multi-region tables to a cluster missing some localities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#skip_localities_check Restore#skip_localities_check}
  */
  readonly skipLocalitiesCheck?: boolean | cdktf.IResolvable;
  /**
  * Allows a table to be restored even if it has foreign key constraints referencing rows that no longer exist in the target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#skip_missing_foreign_keys Restore#skip_missing_foreign_keys}
  */
  readonly skipMissingForeignKeys?: boolean | cdktf.IResolvable;
  /**
  * Allows a table to be restored even if it contains a column whose `DEFAULT` value depends on a sequence. More information can be found [here](https://www.cockroachlabs.com/docs/stable/show-sequences).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#skip_missing_sequences Restore#skip_missing_sequences}
  */
  readonly skipMissingSequences?: boolean | cdktf.IResolvable;
}

export function restoreRestoreOptsToTerraform(struct?: RestoreRestoreOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    into_db: cdktf.stringToTerraform(struct!.intoDb),
    new_db_name: cdktf.stringToTerraform(struct!.newDbName),
    schema_only: cdktf.booleanToTerraform(struct!.schemaOnly),
    skip_localities_check: cdktf.booleanToTerraform(struct!.skipLocalitiesCheck),
    skip_missing_foreign_keys: cdktf.booleanToTerraform(struct!.skipMissingForeignKeys),
    skip_missing_sequences: cdktf.booleanToTerraform(struct!.skipMissingSequences),
  }
}


export function restoreRestoreOptsToHclTerraform(struct?: RestoreRestoreOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    into_db: {
      value: cdktf.stringToHclTerraform(struct!.intoDb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_db_name: {
      value: cdktf.stringToHclTerraform(struct!.newDbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_only: {
      value: cdktf.booleanToHclTerraform(struct!.schemaOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_localities_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipLocalitiesCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_missing_foreign_keys: {
      value: cdktf.booleanToHclTerraform(struct!.skipMissingForeignKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_missing_sequences: {
      value: cdktf.booleanToHclTerraform(struct!.skipMissingSequences),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RestoreRestoreOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RestoreRestoreOpts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intoDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.intoDb = this._intoDb;
    }
    if (this._newDbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newDbName = this._newDbName;
    }
    if (this._schemaOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaOnly = this._schemaOnly;
    }
    if (this._skipLocalitiesCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLocalitiesCheck = this._skipLocalitiesCheck;
    }
    if (this._skipMissingForeignKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipMissingForeignKeys = this._skipMissingForeignKeys;
    }
    if (this._skipMissingSequences !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipMissingSequences = this._skipMissingSequences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestoreRestoreOpts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intoDb = undefined;
      this._newDbName = undefined;
      this._schemaOnly = undefined;
      this._skipLocalitiesCheck = undefined;
      this._skipMissingForeignKeys = undefined;
      this._skipMissingSequences = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intoDb = value.intoDb;
      this._newDbName = value.newDbName;
      this._schemaOnly = value.schemaOnly;
      this._skipLocalitiesCheck = value.skipLocalitiesCheck;
      this._skipMissingForeignKeys = value.skipMissingForeignKeys;
      this._skipMissingSequences = value.skipMissingSequences;
    }
  }

  // into_db - computed: false, optional: true, required: false
  private _intoDb?: string; 
  public get intoDb() {
    return this.getStringAttribute('into_db');
  }
  public set intoDb(value: string) {
    this._intoDb = value;
  }
  public resetIntoDb() {
    this._intoDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intoDbInput() {
    return this._intoDb;
  }

  // new_db_name - computed: false, optional: true, required: false
  private _newDbName?: string; 
  public get newDbName() {
    return this.getStringAttribute('new_db_name');
  }
  public set newDbName(value: string) {
    this._newDbName = value;
  }
  public resetNewDbName() {
    this._newDbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newDbNameInput() {
    return this._newDbName;
  }

  // schema_only - computed: false, optional: true, required: false
  private _schemaOnly?: boolean | cdktf.IResolvable; 
  public get schemaOnly() {
    return this.getBooleanAttribute('schema_only');
  }
  public set schemaOnly(value: boolean | cdktf.IResolvable) {
    this._schemaOnly = value;
  }
  public resetSchemaOnly() {
    this._schemaOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaOnlyInput() {
    return this._schemaOnly;
  }

  // skip_localities_check - computed: false, optional: true, required: false
  private _skipLocalitiesCheck?: boolean | cdktf.IResolvable; 
  public get skipLocalitiesCheck() {
    return this.getBooleanAttribute('skip_localities_check');
  }
  public set skipLocalitiesCheck(value: boolean | cdktf.IResolvable) {
    this._skipLocalitiesCheck = value;
  }
  public resetSkipLocalitiesCheck() {
    this._skipLocalitiesCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLocalitiesCheckInput() {
    return this._skipLocalitiesCheck;
  }

  // skip_missing_foreign_keys - computed: false, optional: true, required: false
  private _skipMissingForeignKeys?: boolean | cdktf.IResolvable; 
  public get skipMissingForeignKeys() {
    return this.getBooleanAttribute('skip_missing_foreign_keys');
  }
  public set skipMissingForeignKeys(value: boolean | cdktf.IResolvable) {
    this._skipMissingForeignKeys = value;
  }
  public resetSkipMissingForeignKeys() {
    this._skipMissingForeignKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMissingForeignKeysInput() {
    return this._skipMissingForeignKeys;
  }

  // skip_missing_sequences - computed: false, optional: true, required: false
  private _skipMissingSequences?: boolean | cdktf.IResolvable; 
  public get skipMissingSequences() {
    return this.getBooleanAttribute('skip_missing_sequences');
  }
  public set skipMissingSequences(value: boolean | cdktf.IResolvable) {
    this._skipMissingSequences = value;
  }
  public resetSkipMissingSequences() {
    this._skipMissingSequences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMissingSequencesInput() {
    return this._skipMissingSequences;
  }
}
export interface RestoreObjects {
  /**
  * The database name in the fully qualified name of the objects to be restored. In the case of a job that restores `tpcc.public.warehouse`, this value would be `tpcc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#database Restore#database}
  */
  readonly database: string;
  /**
  * The schema name in the fully qualified name of the objects to be restored. In the case of a job that restores `tpcc.public.warehouse`, this value would be `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#schema Restore#schema}
  */
  readonly schema?: string;
  /**
  * The table name in the fully qualified name of the objects to be restored. In the case of a job that restores `tpcc.public.warehouse`, this would value be `warehouse`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#tables Restore#tables}
  */
  readonly tables?: string[];
}

export function restoreObjectsToTerraform(struct?: RestoreObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    schema: cdktf.stringToTerraform(struct!.schema),
    tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tables),
  }
}


export function restoreObjectsToHclTerraform(struct?: RestoreObjects | cdktf.IResolvable): any {
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
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RestoreObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RestoreObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tables !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestoreObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._schema = undefined;
      this._tables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._schema = value.schema;
      this._tables = value.tables;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // tables - computed: false, optional: true, required: false
  private _tables?: string[]; 
  public get tables() {
    return this.getListAttribute('tables');
  }
  public set tables(value: string[]) {
    this._tables = value;
  }
  public resetTables() {
    this._tables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables;
  }
}

export class RestoreObjectsList extends cdktf.ComplexList {
  public internalValue? : RestoreObjects[] | cdktf.IResolvable

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
  public get(index: number): RestoreObjectsOutputReference {
    return new RestoreObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore cockroach_restore}
*/
export class Restore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_restore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Restore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Restore to import
  * @param importFromId The id of the existing Restore that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Restore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_restore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/restore cockroach_restore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestoreConfig
  */
  public constructor(scope: Construct, id: string, config: RestoreConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_restore',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.16.0',
        providerVersionConstraint: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupId = config.backupId;
    this._destinationClusterId = config.destinationClusterId;
    this._restoreOpts.internalValue = config.restoreOpts;
    this._sourceClusterId = config.sourceClusterId;
    this._type = config.type;
    this._objects.internalValue = config.objects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: true, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // completion_percent - computed: true, optional: false, required: false
  public get completionPercent() {
    return this.getNumberAttribute('completion_percent');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // destination_cluster_id - computed: false, optional: false, required: true
  private _destinationClusterId?: string; 
  public get destinationClusterId() {
    return this.getStringAttribute('destination_cluster_id');
  }
  public set destinationClusterId(value: string) {
    this._destinationClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationClusterIdInput() {
    return this._destinationClusterId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // restore_opts - computed: false, optional: true, required: false
  private _restoreOpts = new RestoreRestoreOptsOutputReference(this, "restore_opts");
  public get restoreOpts() {
    return this._restoreOpts;
  }
  public putRestoreOpts(value: RestoreRestoreOpts) {
    this._restoreOpts.internalValue = value;
  }
  public resetRestoreOpts() {
    this._restoreOpts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreOptsInput() {
    return this._restoreOpts.internalValue;
  }

  // source_cluster_id - computed: false, optional: true, required: false
  private _sourceClusterId?: string; 
  public get sourceClusterId() {
    return this.getStringAttribute('source_cluster_id');
  }
  public set sourceClusterId(value: string) {
    this._sourceClusterId = value;
  }
  public resetSourceClusterId() {
    this._sourceClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterIdInput() {
    return this._sourceClusterId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new RestoreObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }
  public putObjects(value: RestoreObjects[] | cdktf.IResolvable) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: cdktf.stringToTerraform(this._backupId),
      destination_cluster_id: cdktf.stringToTerraform(this._destinationClusterId),
      restore_opts: restoreRestoreOptsToTerraform(this._restoreOpts.internalValue),
      source_cluster_id: cdktf.stringToTerraform(this._sourceClusterId),
      type: cdktf.stringToTerraform(this._type),
      objects: cdktf.listMapper(restoreObjectsToTerraform, true)(this._objects.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_cluster_id: {
        value: cdktf.stringToHclTerraform(this._destinationClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_opts: {
        value: restoreRestoreOptsToHclTerraform(this._restoreOpts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RestoreRestoreOpts",
      },
      source_cluster_id: {
        value: cdktf.stringToHclTerraform(this._sourceClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      objects: {
        value: cdktf.listMapperHcl(restoreObjectsToHclTerraform, true)(this._objects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RestoreObjectsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
