// https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceReaderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of rows to read from the source database in each batch while backfilling. Maximum allowed value is 50,000. Default is 5,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#backfill_batch_size SourceReader#backfill_batch_size}
  */
  readonly backfillBatchSize?: number;
  /**
  * The source connector that we should read data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#connector_uuid SourceReader#connector_uuid}
  */
  readonly connectorUuid: string;
  /**
  * The name of the data plane to deploy this source reader in. If this is not set, we will use the default data plane for your account. To see the full list of supported data planes on your account, click on 'New pipeline' in our UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#data_plane_name SourceReader#data_plane_name}
  */
  readonly dataPlaneName?: string;
  /**
  * The name of the database we should read data from in the source connector. This should be specified if the source connector's type is DocumentDB, MongoDB, MySQL, MS SQL, Oracle (this maps to the service name), or PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#database_name SourceReader#database_name}
  */
  readonly databaseName?: string;
  /**
  * If `enable_unify_across_databases` is set to true, this should be a list of databases within your Microsoft SQL Server that we should sync data from. All tables that you opt into being unified should exist in each of these databases. This is only applicable if the source type is Microsoft SQL Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#databases_to_unify SourceReader#databases_to_unify}
  */
  readonly databasesToUnify?: string[];
  /**
  * If set to true, Artie will not automatically fetch tables from the source database on the UI. This is useful if you have a large number of tables and you want to manually specify the schema before we fetch all the tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#disable_auto_fetch_tables SourceReader#disable_auto_fetch_tables}
  */
  readonly disableAutoFetchTables?: boolean | cdktf.IResolvable;
  /**
  * If the source database is a very low-traffic PostgreSQL database (e.g., a dev database) and is running on Amazon RDS, we recommend setting this to true to prevent WAL growth issues. This is only applicable if the source type is PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#enable_heartbeats SourceReader#enable_heartbeats}
  */
  readonly enableHeartbeats?: boolean | cdktf.IResolvable;
  /**
  * If set to true, you can specify multiple databases within your Microsoft SQL Server that we should sync data from, and we will unify tables with the same name and schema into a single destination table. This is useful if you have multiple identical databases and want to fan-in the data. This is only applicable if the source type is Microsoft SQL Server and `mssql_replication_method` is set to `fn_dblog`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#enable_unify_across_databases SourceReader#enable_unify_across_databases}
  */
  readonly enableUnifyAcrossDatabases?: boolean | cdktf.IResolvable;
  /**
  * If set to true, you can specify tables that should be generalized to all schemas, meaning we will sync all tables with the same name into the same destination table. This is useful if you have multiple identical schemas and want to fan-in the data. This is only applicable if the source type is PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#enable_unify_across_schemas SourceReader#enable_unify_across_schemas}
  */
  readonly enableUnifyAcrossSchemas?: boolean | cdktf.IResolvable;
  /**
  * If set to true, this source reader can be used by multiple pipelines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#is_shared SourceReader#is_shared}
  */
  readonly isShared?: boolean | cdktf.IResolvable;
  /**
  * If unset, we will use the default replication method (Capture Instances). If set to `fn_dblog`, we will stream data from transaction logs via SQL access. This is only applicable if the source type is Microsoft SQL Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#mssql_replication_method SourceReader#mssql_replication_method}
  */
  readonly mssqlReplicationMethod?: string;
  /**
  * An optional human-readable label for this source reader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#name SourceReader#name}
  */
  readonly name?: string;
  /**
  * If set to true, Artie will write all incoming CDC events into a single Kafka topic per schema. This is currently only supported if your source is Oracle and your account has this feature enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#one_topic_per_schema SourceReader#one_topic_per_schema}
  */
  readonly oneTopicPerSchema?: boolean | cdktf.IResolvable;
  /**
  * The name of the container (pluggable database) if the source type is Oracle and you are using a container database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#oracle_container_name SourceReader#oracle_container_name}
  */
  readonly oracleContainerName?: string;
  /**
  * If this source reader is reading any partitioned tables, this regex pattern should describe the expected suffix of each partition's name so that we can consume data from all partitions. If not set, this defaults to `_((default)|([0-9]{4})_(0[1-9]|1[012]))$` - meaning that for a table called `my_table` that's partitioned by month, we will detect partitions such as `my_table_default`, `my_table_2025_01`, `my_table_2025_02`, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#partition_suffix_regex_pattern SourceReader#partition_suffix_regex_pattern}
  */
  readonly partitionSuffixRegexPattern?: string;
  /**
  * This should be set to `filtered` if the PostgreSQL publication in the source database is not set to include `ALL TABLES`. If that's the case, you will need to explicitly add tables to the publication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#postgres_publication_mode SourceReader#postgres_publication_mode}
  */
  readonly postgresPublicationMode?: string;
  /**
  * If set, this will override the name of the PostgreSQL publication. Otherwise, we will use our default value, `dbz_publication`. This is only applicable if the source type is PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#postgres_publication_name_override SourceReader#postgres_publication_name_override}
  */
  readonly postgresPublicationNameOverride?: string;
  /**
  * If set, this will override the name of the PostgreSQL replication slot. Otherwise, we will use our default value, `artie`. This is only applicable if the source type is PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#postgres_replication_slot_override SourceReader#postgres_replication_slot_override}
  */
  readonly postgresReplicationSlotOverride?: string;
  /**
  * A map of tables from the source database that you want this source reader to include CDC events for. This should be specified if (and only if) the source reader has `is_shared` set to true, and it must include all tables that are specified in the `tables` attribute of any pipeline that uses this source reader. The key for each table should be formatted as `schema_name.table_name` if your source database uses schemas, otherwise just `table_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#tables SourceReader#tables}
  */
  readonly tables?: { [key: string]: SourceReaderTables } | cdktf.IResolvable;
  /**
  * If unify across schemas is enabled, this is an additional regex pattern that you can use to filter which schemas should be unified. This is only applicable if the source type is PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#unify_across_schemas_regex SourceReader#unify_across_schemas_regex}
  */
  readonly unifyAcrossSchemasRegex?: string;
}
export interface SourceReaderTables {
  /**
  * If the source table is partitioned and its child partitions are in a different schema, this should specify the name of that schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#child_partition_schema_name SourceReader#child_partition_schema_name}
  */
  readonly childPartitionSchemaName?: string;
  /**
  * An optional list of columns to exclude from CDC events. This cannot be used if `columns_to_include` is also specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#columns_to_exclude SourceReader#columns_to_exclude}
  */
  readonly columnsToExclude?: string[];
  /**
  * An optional list of columns to include in CDC events. If not provided, all columns will be included. This cannot be used if `columns_to_exclude` is also specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#columns_to_include SourceReader#columns_to_include}
  */
  readonly columnsToInclude?: string[];
  /**
  * If the source table is partitioned, set this to true and we will ingest data from all of its partitions. You may also need to customize `partition_suffix_regex_pattern` on the source reader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#is_partitioned SourceReader#is_partitioned}
  */
  readonly isPartitioned?: boolean | cdktf.IResolvable;
  /**
  * The name of the table in the source database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#name SourceReader#name}
  */
  readonly name: string;
  /**
  * The name of the schema the table belongs to in the source database. This must be specified if your source database uses schemas (such as PostgreSQL), e.g. `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#schema SourceReader#schema}
  */
  readonly schema?: string;
  /**
  * This should be set to true for any tables that you intend to unify across databases in any pipeline that uses this source reader. This is only applicable if the source reader has `enable_unify_across_databases` set to true and `databases_to_unify` filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#unify_across_databases SourceReader#unify_across_databases}
  */
  readonly unifyAcrossDatabases?: boolean | cdktf.IResolvable;
  /**
  * This should be set to true for any tables that you intend to unify across schemas in any pipeline that uses this source reader. This is only applicable if the source reader has `enable_unify_across_schemas` set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#unify_across_schemas SourceReader#unify_across_schemas}
  */
  readonly unifyAcrossSchemas?: boolean | cdktf.IResolvable;
}

export function sourceReaderTablesToTerraform(struct?: SourceReaderTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_partition_schema_name: cdktf.stringToTerraform(struct!.childPartitionSchemaName),
    columns_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnsToExclude),
    columns_to_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnsToInclude),
    is_partitioned: cdktf.booleanToTerraform(struct!.isPartitioned),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
    unify_across_databases: cdktf.booleanToTerraform(struct!.unifyAcrossDatabases),
    unify_across_schemas: cdktf.booleanToTerraform(struct!.unifyAcrossSchemas),
  }
}


export function sourceReaderTablesToHclTerraform(struct?: SourceReaderTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_partition_schema_name: {
      value: cdktf.stringToHclTerraform(struct!.childPartitionSchemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnsToExclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    columns_to_include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnsToInclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.isPartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    unify_across_databases: {
      value: cdktf.booleanToHclTerraform(struct!.unifyAcrossDatabases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unify_across_schemas: {
      value: cdktf.booleanToHclTerraform(struct!.unifyAcrossSchemas),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceReaderTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SourceReaderTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childPartitionSchemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.childPartitionSchemaName = this._childPartitionSchemaName;
    }
    if (this._columnsToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnsToExclude = this._columnsToExclude;
    }
    if (this._columnsToInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnsToInclude = this._columnsToInclude;
    }
    if (this._isPartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPartitioned = this._isPartitioned;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._unifyAcrossDatabases !== undefined) {
      hasAnyValues = true;
      internalValueResult.unifyAcrossDatabases = this._unifyAcrossDatabases;
    }
    if (this._unifyAcrossSchemas !== undefined) {
      hasAnyValues = true;
      internalValueResult.unifyAcrossSchemas = this._unifyAcrossSchemas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceReaderTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._childPartitionSchemaName = undefined;
      this._columnsToExclude = undefined;
      this._columnsToInclude = undefined;
      this._isPartitioned = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._unifyAcrossDatabases = undefined;
      this._unifyAcrossSchemas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._childPartitionSchemaName = value.childPartitionSchemaName;
      this._columnsToExclude = value.columnsToExclude;
      this._columnsToInclude = value.columnsToInclude;
      this._isPartitioned = value.isPartitioned;
      this._name = value.name;
      this._schema = value.schema;
      this._unifyAcrossDatabases = value.unifyAcrossDatabases;
      this._unifyAcrossSchemas = value.unifyAcrossSchemas;
    }
  }

  // child_partition_schema_name - computed: true, optional: true, required: false
  private _childPartitionSchemaName?: string; 
  public get childPartitionSchemaName() {
    return this.getStringAttribute('child_partition_schema_name');
  }
  public set childPartitionSchemaName(value: string) {
    this._childPartitionSchemaName = value;
  }
  public resetChildPartitionSchemaName() {
    this._childPartitionSchemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childPartitionSchemaNameInput() {
    return this._childPartitionSchemaName;
  }

  // columns_to_exclude - computed: true, optional: true, required: false
  private _columnsToExclude?: string[]; 
  public get columnsToExclude() {
    return this.getListAttribute('columns_to_exclude');
  }
  public set columnsToExclude(value: string[]) {
    this._columnsToExclude = value;
  }
  public resetColumnsToExclude() {
    this._columnsToExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsToExcludeInput() {
    return this._columnsToExclude;
  }

  // columns_to_include - computed: true, optional: true, required: false
  private _columnsToInclude?: string[]; 
  public get columnsToInclude() {
    return this.getListAttribute('columns_to_include');
  }
  public set columnsToInclude(value: string[]) {
    this._columnsToInclude = value;
  }
  public resetColumnsToInclude() {
    this._columnsToInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsToIncludeInput() {
    return this._columnsToInclude;
  }

  // is_partitioned - computed: true, optional: true, required: false
  private _isPartitioned?: boolean | cdktf.IResolvable; 
  public get isPartitioned() {
    return this.getBooleanAttribute('is_partitioned');
  }
  public set isPartitioned(value: boolean | cdktf.IResolvable) {
    this._isPartitioned = value;
  }
  public resetIsPartitioned() {
    this._isPartitioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPartitionedInput() {
    return this._isPartitioned;
  }

  // name - computed: true, optional: false, required: true
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

  // schema - computed: true, optional: true, required: false
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

  // unify_across_databases - computed: true, optional: true, required: false
  private _unifyAcrossDatabases?: boolean | cdktf.IResolvable; 
  public get unifyAcrossDatabases() {
    return this.getBooleanAttribute('unify_across_databases');
  }
  public set unifyAcrossDatabases(value: boolean | cdktf.IResolvable) {
    this._unifyAcrossDatabases = value;
  }
  public resetUnifyAcrossDatabases() {
    this._unifyAcrossDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifyAcrossDatabasesInput() {
    return this._unifyAcrossDatabases;
  }

  // unify_across_schemas - computed: true, optional: true, required: false
  private _unifyAcrossSchemas?: boolean | cdktf.IResolvable; 
  public get unifyAcrossSchemas() {
    return this.getBooleanAttribute('unify_across_schemas');
  }
  public set unifyAcrossSchemas(value: boolean | cdktf.IResolvable) {
    this._unifyAcrossSchemas = value;
  }
  public resetUnifyAcrossSchemas() {
    this._unifyAcrossSchemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifyAcrossSchemasInput() {
    return this._unifyAcrossSchemas;
  }
}

export class SourceReaderTablesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SourceReaderTables } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SourceReaderTablesOutputReference {
    return new SourceReaderTablesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader artie_source_reader}
*/
export class SourceReader extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artie_source_reader";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceReader resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceReader to import
  * @param importFromId The id of the existing SourceReader that should be imported. Refer to the {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceReader to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artie_source_reader", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.2/docs/resources/source_reader artie_source_reader} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceReaderConfig
  */
  public constructor(scope: Construct, id: string, config: SourceReaderConfig) {
    super(scope, id, {
      terraformResourceType: 'artie_source_reader',
      terraformGeneratorMetadata: {
        providerName: 'artie',
        providerVersion: '2.3.2',
        providerVersionConstraint: '2.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backfillBatchSize = config.backfillBatchSize;
    this._connectorUuid = config.connectorUuid;
    this._dataPlaneName = config.dataPlaneName;
    this._databaseName = config.databaseName;
    this._databasesToUnify = config.databasesToUnify;
    this._disableAutoFetchTables = config.disableAutoFetchTables;
    this._enableHeartbeats = config.enableHeartbeats;
    this._enableUnifyAcrossDatabases = config.enableUnifyAcrossDatabases;
    this._enableUnifyAcrossSchemas = config.enableUnifyAcrossSchemas;
    this._isShared = config.isShared;
    this._mssqlReplicationMethod = config.mssqlReplicationMethod;
    this._name = config.name;
    this._oneTopicPerSchema = config.oneTopicPerSchema;
    this._oracleContainerName = config.oracleContainerName;
    this._partitionSuffixRegexPattern = config.partitionSuffixRegexPattern;
    this._postgresPublicationMode = config.postgresPublicationMode;
    this._postgresPublicationNameOverride = config.postgresPublicationNameOverride;
    this._postgresReplicationSlotOverride = config.postgresReplicationSlotOverride;
    this._tables.internalValue = config.tables;
    this._unifyAcrossSchemasRegex = config.unifyAcrossSchemasRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backfill_batch_size - computed: true, optional: true, required: false
  private _backfillBatchSize?: number; 
  public get backfillBatchSize() {
    return this.getNumberAttribute('backfill_batch_size');
  }
  public set backfillBatchSize(value: number) {
    this._backfillBatchSize = value;
  }
  public resetBackfillBatchSize() {
    this._backfillBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillBatchSizeInput() {
    return this._backfillBatchSize;
  }

  // connector_uuid - computed: false, optional: false, required: true
  private _connectorUuid?: string; 
  public get connectorUuid() {
    return this.getStringAttribute('connector_uuid');
  }
  public set connectorUuid(value: string) {
    this._connectorUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorUuidInput() {
    return this._connectorUuid;
  }

  // data_plane_name - computed: true, optional: true, required: false
  private _dataPlaneName?: string; 
  public get dataPlaneName() {
    return this.getStringAttribute('data_plane_name');
  }
  public set dataPlaneName(value: string) {
    this._dataPlaneName = value;
  }
  public resetDataPlaneName() {
    this._dataPlaneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneNameInput() {
    return this._dataPlaneName;
  }

  // database_name - computed: true, optional: true, required: false
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

  // databases_to_unify - computed: true, optional: true, required: false
  private _databasesToUnify?: string[]; 
  public get databasesToUnify() {
    return this.getListAttribute('databases_to_unify');
  }
  public set databasesToUnify(value: string[]) {
    this._databasesToUnify = value;
  }
  public resetDatabasesToUnify() {
    this._databasesToUnify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesToUnifyInput() {
    return this._databasesToUnify;
  }

  // disable_auto_fetch_tables - computed: true, optional: true, required: false
  private _disableAutoFetchTables?: boolean | cdktf.IResolvable; 
  public get disableAutoFetchTables() {
    return this.getBooleanAttribute('disable_auto_fetch_tables');
  }
  public set disableAutoFetchTables(value: boolean | cdktf.IResolvable) {
    this._disableAutoFetchTables = value;
  }
  public resetDisableAutoFetchTables() {
    this._disableAutoFetchTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoFetchTablesInput() {
    return this._disableAutoFetchTables;
  }

  // enable_heartbeats - computed: true, optional: true, required: false
  private _enableHeartbeats?: boolean | cdktf.IResolvable; 
  public get enableHeartbeats() {
    return this.getBooleanAttribute('enable_heartbeats');
  }
  public set enableHeartbeats(value: boolean | cdktf.IResolvable) {
    this._enableHeartbeats = value;
  }
  public resetEnableHeartbeats() {
    this._enableHeartbeats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHeartbeatsInput() {
    return this._enableHeartbeats;
  }

  // enable_unify_across_databases - computed: true, optional: true, required: false
  private _enableUnifyAcrossDatabases?: boolean | cdktf.IResolvable; 
  public get enableUnifyAcrossDatabases() {
    return this.getBooleanAttribute('enable_unify_across_databases');
  }
  public set enableUnifyAcrossDatabases(value: boolean | cdktf.IResolvable) {
    this._enableUnifyAcrossDatabases = value;
  }
  public resetEnableUnifyAcrossDatabases() {
    this._enableUnifyAcrossDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnifyAcrossDatabasesInput() {
    return this._enableUnifyAcrossDatabases;
  }

  // enable_unify_across_schemas - computed: true, optional: true, required: false
  private _enableUnifyAcrossSchemas?: boolean | cdktf.IResolvable; 
  public get enableUnifyAcrossSchemas() {
    return this.getBooleanAttribute('enable_unify_across_schemas');
  }
  public set enableUnifyAcrossSchemas(value: boolean | cdktf.IResolvable) {
    this._enableUnifyAcrossSchemas = value;
  }
  public resetEnableUnifyAcrossSchemas() {
    this._enableUnifyAcrossSchemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnifyAcrossSchemasInput() {
    return this._enableUnifyAcrossSchemas;
  }

  // is_shared - computed: true, optional: true, required: false
  private _isShared?: boolean | cdktf.IResolvable; 
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }
  public set isShared(value: boolean | cdktf.IResolvable) {
    this._isShared = value;
  }
  public resetIsShared() {
    this._isShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSharedInput() {
    return this._isShared;
  }

  // mssql_replication_method - computed: true, optional: true, required: false
  private _mssqlReplicationMethod?: string; 
  public get mssqlReplicationMethod() {
    return this.getStringAttribute('mssql_replication_method');
  }
  public set mssqlReplicationMethod(value: string) {
    this._mssqlReplicationMethod = value;
  }
  public resetMssqlReplicationMethod() {
    this._mssqlReplicationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlReplicationMethodInput() {
    return this._mssqlReplicationMethod;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // one_topic_per_schema - computed: true, optional: true, required: false
  private _oneTopicPerSchema?: boolean | cdktf.IResolvable; 
  public get oneTopicPerSchema() {
    return this.getBooleanAttribute('one_topic_per_schema');
  }
  public set oneTopicPerSchema(value: boolean | cdktf.IResolvable) {
    this._oneTopicPerSchema = value;
  }
  public resetOneTopicPerSchema() {
    this._oneTopicPerSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTopicPerSchemaInput() {
    return this._oneTopicPerSchema;
  }

  // oracle_container_name - computed: true, optional: true, required: false
  private _oracleContainerName?: string; 
  public get oracleContainerName() {
    return this.getStringAttribute('oracle_container_name');
  }
  public set oracleContainerName(value: string) {
    this._oracleContainerName = value;
  }
  public resetOracleContainerName() {
    this._oracleContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleContainerNameInput() {
    return this._oracleContainerName;
  }

  // partition_suffix_regex_pattern - computed: true, optional: true, required: false
  private _partitionSuffixRegexPattern?: string; 
  public get partitionSuffixRegexPattern() {
    return this.getStringAttribute('partition_suffix_regex_pattern');
  }
  public set partitionSuffixRegexPattern(value: string) {
    this._partitionSuffixRegexPattern = value;
  }
  public resetPartitionSuffixRegexPattern() {
    this._partitionSuffixRegexPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSuffixRegexPatternInput() {
    return this._partitionSuffixRegexPattern;
  }

  // postgres_publication_mode - computed: true, optional: true, required: false
  private _postgresPublicationMode?: string; 
  public get postgresPublicationMode() {
    return this.getStringAttribute('postgres_publication_mode');
  }
  public set postgresPublicationMode(value: string) {
    this._postgresPublicationMode = value;
  }
  public resetPostgresPublicationMode() {
    this._postgresPublicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresPublicationModeInput() {
    return this._postgresPublicationMode;
  }

  // postgres_publication_name_override - computed: true, optional: true, required: false
  private _postgresPublicationNameOverride?: string; 
  public get postgresPublicationNameOverride() {
    return this.getStringAttribute('postgres_publication_name_override');
  }
  public set postgresPublicationNameOverride(value: string) {
    this._postgresPublicationNameOverride = value;
  }
  public resetPostgresPublicationNameOverride() {
    this._postgresPublicationNameOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresPublicationNameOverrideInput() {
    return this._postgresPublicationNameOverride;
  }

  // postgres_replication_slot_override - computed: true, optional: true, required: false
  private _postgresReplicationSlotOverride?: string; 
  public get postgresReplicationSlotOverride() {
    return this.getStringAttribute('postgres_replication_slot_override');
  }
  public set postgresReplicationSlotOverride(value: string) {
    this._postgresReplicationSlotOverride = value;
  }
  public resetPostgresReplicationSlotOverride() {
    this._postgresReplicationSlotOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresReplicationSlotOverrideInput() {
    return this._postgresReplicationSlotOverride;
  }

  // tables - computed: true, optional: true, required: false
  private _tables = new SourceReaderTablesMap(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: { [key: string]: SourceReaderTables } | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // unify_across_schemas_regex - computed: true, optional: true, required: false
  private _unifyAcrossSchemasRegex?: string; 
  public get unifyAcrossSchemasRegex() {
    return this.getStringAttribute('unify_across_schemas_regex');
  }
  public set unifyAcrossSchemasRegex(value: string) {
    this._unifyAcrossSchemasRegex = value;
  }
  public resetUnifyAcrossSchemasRegex() {
    this._unifyAcrossSchemasRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifyAcrossSchemasRegexInput() {
    return this._unifyAcrossSchemasRegex;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backfill_batch_size: cdktf.numberToTerraform(this._backfillBatchSize),
      connector_uuid: cdktf.stringToTerraform(this._connectorUuid),
      data_plane_name: cdktf.stringToTerraform(this._dataPlaneName),
      database_name: cdktf.stringToTerraform(this._databaseName),
      databases_to_unify: cdktf.listMapper(cdktf.stringToTerraform, false)(this._databasesToUnify),
      disable_auto_fetch_tables: cdktf.booleanToTerraform(this._disableAutoFetchTables),
      enable_heartbeats: cdktf.booleanToTerraform(this._enableHeartbeats),
      enable_unify_across_databases: cdktf.booleanToTerraform(this._enableUnifyAcrossDatabases),
      enable_unify_across_schemas: cdktf.booleanToTerraform(this._enableUnifyAcrossSchemas),
      is_shared: cdktf.booleanToTerraform(this._isShared),
      mssql_replication_method: cdktf.stringToTerraform(this._mssqlReplicationMethod),
      name: cdktf.stringToTerraform(this._name),
      one_topic_per_schema: cdktf.booleanToTerraform(this._oneTopicPerSchema),
      oracle_container_name: cdktf.stringToTerraform(this._oracleContainerName),
      partition_suffix_regex_pattern: cdktf.stringToTerraform(this._partitionSuffixRegexPattern),
      postgres_publication_mode: cdktf.stringToTerraform(this._postgresPublicationMode),
      postgres_publication_name_override: cdktf.stringToTerraform(this._postgresPublicationNameOverride),
      postgres_replication_slot_override: cdktf.stringToTerraform(this._postgresReplicationSlotOverride),
      tables: cdktf.hashMapper(sourceReaderTablesToTerraform)(this._tables.internalValue),
      unify_across_schemas_regex: cdktf.stringToTerraform(this._unifyAcrossSchemasRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backfill_batch_size: {
        value: cdktf.numberToHclTerraform(this._backfillBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connector_uuid: {
        value: cdktf.stringToHclTerraform(this._connectorUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_plane_name: {
        value: cdktf.stringToHclTerraform(this._dataPlaneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      databases_to_unify: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._databasesToUnify),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disable_auto_fetch_tables: {
        value: cdktf.booleanToHclTerraform(this._disableAutoFetchTables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_heartbeats: {
        value: cdktf.booleanToHclTerraform(this._enableHeartbeats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_unify_across_databases: {
        value: cdktf.booleanToHclTerraform(this._enableUnifyAcrossDatabases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_unify_across_schemas: {
        value: cdktf.booleanToHclTerraform(this._enableUnifyAcrossSchemas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_shared: {
        value: cdktf.booleanToHclTerraform(this._isShared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mssql_replication_method: {
        value: cdktf.stringToHclTerraform(this._mssqlReplicationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      one_topic_per_schema: {
        value: cdktf.booleanToHclTerraform(this._oneTopicPerSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oracle_container_name: {
        value: cdktf.stringToHclTerraform(this._oracleContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_suffix_regex_pattern: {
        value: cdktf.stringToHclTerraform(this._partitionSuffixRegexPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_publication_mode: {
        value: cdktf.stringToHclTerraform(this._postgresPublicationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_publication_name_override: {
        value: cdktf.stringToHclTerraform(this._postgresPublicationNameOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_replication_slot_override: {
        value: cdktf.stringToHclTerraform(this._postgresReplicationSlotOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tables: {
        value: cdktf.hashMapperHcl(sourceReaderTablesToHclTerraform)(this._tables.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SourceReaderTablesMap",
      },
      unify_across_schemas_regex: {
        value: cdktf.stringToHclTerraform(this._unifyAcrossSchemasRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
