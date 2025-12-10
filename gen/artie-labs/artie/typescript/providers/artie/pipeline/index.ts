// https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the data plane to use for this pipeline. If this is not set, we will use the default data plane for your account. To see the full list of supported data planes on your account, click on 'New pipeline' in our UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#data_plane_name Pipeline#data_plane_name}
  */
  readonly dataPlaneName?: string;
  /**
  * If set, tables from this schema will not be prefixed with this schema name in the destination. Tables from other schemas will be prefixed with their source schema name to avoid table name collisions (unless `use_same_schema_as_source` is set to true). This is currently only applicable if the source is MySQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#default_source_schema Pipeline#default_source_schema}
  */
  readonly defaultSourceSchema?: string;
  /**
  * This contains configuration that pertains to the destination database but is specific to this pipeline. The basic connection settings for the destination, which can be shared by multiple pipelines, are stored in the corresponding `artie_connector` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#destination_config Pipeline#destination_config}
  */
  readonly destinationConfig: PipelineDestinationConfig;
  /**
  * This must point to an `artie_connector` resource that represents the destination database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#destination_connector_uuid Pipeline#destination_connector_uuid}
  */
  readonly destinationConnectorUuid: string;
  /**
  * If set to true, when a column is dropped from the source it will also be dropped in the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#drop_deleted_columns Pipeline#drop_deleted_columns}
  */
  readonly dropDeletedColumns?: boolean | cdktf.IResolvable;
  /**
  * This contains rules for how often Artie should flush data to the destination. If not specified, Artie will provide default values. A flush will happen when any of the rules are met (e.g. 30 seconds since the last flush OR 150k rows OR 50MB of data).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#flush_rules Pipeline#flush_rules}
  */
  readonly flushRules?: PipelineFlushRules;
  /**
  * If set to true, Artie will add a new column called `__artie_updated_at` to the destination table to indicate when the row was last updated by Artie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#include_artie_updated_at_column Pipeline#include_artie_updated_at_column}
  */
  readonly includeArtieUpdatedAtColumn?: boolean | cdktf.IResolvable;
  /**
  * If set to true, Artie will add a new column called `__artie_db_updated_at` to the destination table to indicate when the row was last updated by the source database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#include_database_updated_at_column Pipeline#include_database_updated_at_column}
  */
  readonly includeDatabaseUpdatedAtColumn?: boolean | cdktf.IResolvable;
  /**
  * The human-readable name of the pipeline. This is used only as a label and can contain any characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name: string;
  /**
  * If set to true, when a row is deleted from the source it will not be deleted from the destination. Instead, a new boolean column called `__artie_delete` will be added to the destination table to indicate which rows have been deleted in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#soft_delete_rows Pipeline#soft_delete_rows}
  */
  readonly softDeleteRows?: boolean | cdktf.IResolvable;
  /**
  * This must point to an `artie_source_reader` resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#source_reader_uuid Pipeline#source_reader_uuid}
  */
  readonly sourceReaderUuid: string;
  /**
  * If set to true, Artie will split events by type and store them in separate tables. This is only applicable if the source is API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#split_events_by_type Pipeline#split_events_by_type}
  */
  readonly splitEventsByType?: boolean | cdktf.IResolvable;
  /**
  * A map of tables from the source database that you want to replicate to the destination. The key for each table should be formatted as `schema_name.table_name` if your source database uses schemas, otherwise just `table_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#tables Pipeline#tables}
  */
  readonly tables: { [key: string]: PipelineTables } | cdktf.IResolvable;
}
export interface PipelineDestinationConfig {
  /**
  * The name of the S3 or GCS bucket that data should be synced to. This should be filled if the destination is S3, GCS, or Iceberg (for Iceberg, this bucket is where delta files will be stored).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#bucket Pipeline#bucket}
  */
  readonly bucket?: string;
  /**
  * If set to true, Artie will automatically create namespaces if they don't exist. This is only applicable if the destination is Iceberg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#create_iceberg_namespaces Pipeline#create_iceberg_namespaces}
  */
  readonly createIcebergNamespaces?: boolean | cdktf.IResolvable;
  /**
  * The name of the database that data should be synced to in the destination. This should be filled if the destination is MS SQL or Snowflake, unless `use_same_schema_as_source` is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#database Pipeline#database}
  */
  readonly database?: string;
  /**
  * The name of the dataset that data should be synced to in the destination. This should be filled if the destination is BigQuery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#dataset Pipeline#dataset}
  */
  readonly dataset?: string;
  /**
  * If provided, all files will be stored under this folder inside the S3 or GCS bucket. This is optional and only applies if the destination is S3 or GCS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#folder Pipeline#folder}
  */
  readonly folder?: string;
  /**
  * The name of the schema or namespace that data should be synced to in the destination. This should be filled if the destination is MS SQL, Redshift, Iceberg, or Snowflake (unless `use_same_schema_as_source` is set to true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#schema Pipeline#schema}
  */
  readonly schema?: string;
  /**
  * If `use_same_schema_as_source` is enabled, this prefix will be added to each schema name in the destination. This is useful if you want to namespace all of this pipeline's schemas in the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#schema_name_prefix Pipeline#schema_name_prefix}
  */
  readonly schemaNamePrefix?: string;
  /**
  * If provided, this is the separator between database, schema and table name. This is only applicable if the destination is S3 or GCS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#table_name_separator Pipeline#table_name_separator}
  */
  readonly tableNameSeparator?: string;
  /**
  * If set to true, each table from the source database will be synced to a schema with the same name as its source schema. This can only be used if both the source and destination support multiple schemas (e.g. PostgreSQL, Redshift, Snowflake, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#use_same_schema_as_source Pipeline#use_same_schema_as_source}
  */
  readonly useSameSchemaAsSource?: boolean | cdktf.IResolvable;
}

export function pipelineDestinationConfigToTerraform(struct?: PipelineDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    create_iceberg_namespaces: cdktf.booleanToTerraform(struct!.createIcebergNamespaces),
    database: cdktf.stringToTerraform(struct!.database),
    dataset: cdktf.stringToTerraform(struct!.dataset),
    folder: cdktf.stringToTerraform(struct!.folder),
    schema: cdktf.stringToTerraform(struct!.schema),
    schema_name_prefix: cdktf.stringToTerraform(struct!.schemaNamePrefix),
    table_name_separator: cdktf.stringToTerraform(struct!.tableNameSeparator),
    use_same_schema_as_source: cdktf.booleanToTerraform(struct!.useSameSchemaAsSource),
  }
}


export function pipelineDestinationConfigToHclTerraform(struct?: PipelineDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_iceberg_namespaces: {
      value: cdktf.booleanToHclTerraform(struct!.createIcebergNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
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
    schema_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.schemaNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name_separator: {
      value: cdktf.stringToHclTerraform(struct!.tableNameSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_same_schema_as_source: {
      value: cdktf.booleanToHclTerraform(struct!.useSameSchemaAsSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._createIcebergNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.createIcebergNamespaces = this._createIcebergNamespaces;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._schemaNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaNamePrefix = this._schemaNamePrefix;
    }
    if (this._tableNameSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNameSeparator = this._tableNameSeparator;
    }
    if (this._useSameSchemaAsSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSameSchemaAsSource = this._useSameSchemaAsSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._createIcebergNamespaces = undefined;
      this._database = undefined;
      this._dataset = undefined;
      this._folder = undefined;
      this._schema = undefined;
      this._schemaNamePrefix = undefined;
      this._tableNameSeparator = undefined;
      this._useSameSchemaAsSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._createIcebergNamespaces = value.createIcebergNamespaces;
      this._database = value.database;
      this._dataset = value.dataset;
      this._folder = value.folder;
      this._schema = value.schema;
      this._schemaNamePrefix = value.schemaNamePrefix;
      this._tableNameSeparator = value.tableNameSeparator;
      this._useSameSchemaAsSource = value.useSameSchemaAsSource;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // create_iceberg_namespaces - computed: true, optional: true, required: false
  private _createIcebergNamespaces?: boolean | cdktf.IResolvable; 
  public get createIcebergNamespaces() {
    return this.getBooleanAttribute('create_iceberg_namespaces');
  }
  public set createIcebergNamespaces(value: boolean | cdktf.IResolvable) {
    this._createIcebergNamespaces = value;
  }
  public resetCreateIcebergNamespaces() {
    this._createIcebergNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIcebergNamespacesInput() {
    return this._createIcebergNamespaces;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // dataset - computed: true, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // schema_name_prefix - computed: true, optional: true, required: false
  private _schemaNamePrefix?: string; 
  public get schemaNamePrefix() {
    return this.getStringAttribute('schema_name_prefix');
  }
  public set schemaNamePrefix(value: string) {
    this._schemaNamePrefix = value;
  }
  public resetSchemaNamePrefix() {
    this._schemaNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNamePrefixInput() {
    return this._schemaNamePrefix;
  }

  // table_name_separator - computed: true, optional: true, required: false
  private _tableNameSeparator?: string; 
  public get tableNameSeparator() {
    return this.getStringAttribute('table_name_separator');
  }
  public set tableNameSeparator(value: string) {
    this._tableNameSeparator = value;
  }
  public resetTableNameSeparator() {
    this._tableNameSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameSeparatorInput() {
    return this._tableNameSeparator;
  }

  // use_same_schema_as_source - computed: true, optional: true, required: false
  private _useSameSchemaAsSource?: boolean | cdktf.IResolvable; 
  public get useSameSchemaAsSource() {
    return this.getBooleanAttribute('use_same_schema_as_source');
  }
  public set useSameSchemaAsSource(value: boolean | cdktf.IResolvable) {
    this._useSameSchemaAsSource = value;
  }
  public resetUseSameSchemaAsSource() {
    this._useSameSchemaAsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSameSchemaAsSourceInput() {
    return this._useSameSchemaAsSource;
  }
}
export interface PipelineFlushRules {
  /**
  * The number of rows to buffer before flushing to the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#buffer_rows Pipeline#buffer_rows}
  */
  readonly bufferRows?: number;
  /**
  * The flush interval in seconds for how often Artie should flush data to the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#flush_interval_seconds Pipeline#flush_interval_seconds}
  */
  readonly flushIntervalSeconds?: number;
  /**
  * The size in kb of data to buffer before flushing to the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#flush_size_kb Pipeline#flush_size_kb}
  */
  readonly flushSizeKb?: number;
}

export function pipelineFlushRulesToTerraform(struct?: PipelineFlushRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_rows: cdktf.numberToTerraform(struct!.bufferRows),
    flush_interval_seconds: cdktf.numberToTerraform(struct!.flushIntervalSeconds),
    flush_size_kb: cdktf.numberToTerraform(struct!.flushSizeKb),
  }
}


export function pipelineFlushRulesToHclTerraform(struct?: PipelineFlushRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_rows: {
      value: cdktf.numberToHclTerraform(struct!.bufferRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flush_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.flushIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flush_size_kb: {
      value: cdktf.numberToHclTerraform(struct!.flushSizeKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineFlushRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineFlushRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferRows = this._bufferRows;
    }
    if (this._flushIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushIntervalSeconds = this._flushIntervalSeconds;
    }
    if (this._flushSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushSizeKb = this._flushSizeKb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineFlushRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferRows = undefined;
      this._flushIntervalSeconds = undefined;
      this._flushSizeKb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferRows = value.bufferRows;
      this._flushIntervalSeconds = value.flushIntervalSeconds;
      this._flushSizeKb = value.flushSizeKb;
    }
  }

  // buffer_rows - computed: true, optional: true, required: false
  private _bufferRows?: number; 
  public get bufferRows() {
    return this.getNumberAttribute('buffer_rows');
  }
  public set bufferRows(value: number) {
    this._bufferRows = value;
  }
  public resetBufferRows() {
    this._bufferRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferRowsInput() {
    return this._bufferRows;
  }

  // flush_interval_seconds - computed: true, optional: true, required: false
  private _flushIntervalSeconds?: number; 
  public get flushIntervalSeconds() {
    return this.getNumberAttribute('flush_interval_seconds');
  }
  public set flushIntervalSeconds(value: number) {
    this._flushIntervalSeconds = value;
  }
  public resetFlushIntervalSeconds() {
    this._flushIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalSecondsInput() {
    return this._flushIntervalSeconds;
  }

  // flush_size_kb - computed: true, optional: true, required: false
  private _flushSizeKb?: number; 
  public get flushSizeKb() {
    return this.getNumberAttribute('flush_size_kb');
  }
  public set flushSizeKb(value: number) {
    this._flushSizeKb = value;
  }
  public resetFlushSizeKb() {
    this._flushSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushSizeKbInput() {
    return this._flushSizeKb;
  }
}
export interface PipelineTablesMergePredicates {
  /**
  * The name of the column the destination table is partitioned by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#partition_field Pipeline#partition_field}
  */
  readonly partitionField: string;
  /**
  * The type of partition to use. One of 'time' or 'integer'. Required for BigQuery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#partition_type Pipeline#partition_type}
  */
  readonly partitionType?: string;
}

export function pipelineTablesMergePredicatesToTerraform(struct?: PipelineTablesMergePredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_field: cdktf.stringToTerraform(struct!.partitionField),
    partition_type: cdktf.stringToTerraform(struct!.partitionType),
  }
}


export function pipelineTablesMergePredicatesToHclTerraform(struct?: PipelineTablesMergePredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_field: {
      value: cdktf.stringToHclTerraform(struct!.partitionField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_type: {
      value: cdktf.stringToHclTerraform(struct!.partitionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineTablesMergePredicatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineTablesMergePredicates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionField !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionField = this._partitionField;
    }
    if (this._partitionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionType = this._partitionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTablesMergePredicates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionField = undefined;
      this._partitionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionField = value.partitionField;
      this._partitionType = value.partitionType;
    }
  }

  // partition_field - computed: true, optional: false, required: true
  private _partitionField?: string; 
  public get partitionField() {
    return this.getStringAttribute('partition_field');
  }
  public set partitionField(value: string) {
    this._partitionField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionFieldInput() {
    return this._partitionField;
  }

  // partition_type - computed: true, optional: true, required: false
  private _partitionType?: string; 
  public get partitionType() {
    return this.getStringAttribute('partition_type');
  }
  public set partitionType(value: string) {
    this._partitionType = value;
  }
  public resetPartitionType() {
    this._partitionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionTypeInput() {
    return this._partitionType;
  }
}

export class PipelineTablesMergePredicatesList extends cdktf.ComplexList {
  public internalValue? : PipelineTablesMergePredicates[] | cdktf.IResolvable

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
  public get(index: number): PipelineTablesMergePredicatesOutputReference {
    return new PipelineTablesMergePredicatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PipelineTablesSoftPartitioning {
  /**
  * Whether soft partitioning is enabled for this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#enabled Pipeline#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The maximum number of partitions to maintain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#max_partitions Pipeline#max_partitions}
  */
  readonly maxPartitions: number;
  /**
  * The column to use for soft partitioning. To prevent duplicate rows, the partition column should be immutable, for example `created_at`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#partition_column Pipeline#partition_column}
  */
  readonly partitionColumn: string;
  /**
  * The frequency of partitioning ('monthly' and 'daily' are supported).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#partition_frequency Pipeline#partition_frequency}
  */
  readonly partitionFrequency: string;
}

export function pipelineTablesSoftPartitioningToTerraform(struct?: PipelineTablesSoftPartitioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_partitions: cdktf.numberToTerraform(struct!.maxPartitions),
    partition_column: cdktf.stringToTerraform(struct!.partitionColumn),
    partition_frequency: cdktf.stringToTerraform(struct!.partitionFrequency),
  }
}


export function pipelineTablesSoftPartitioningToHclTerraform(struct?: PipelineTablesSoftPartitioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_partitions: {
      value: cdktf.numberToHclTerraform(struct!.maxPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_column: {
      value: cdktf.stringToHclTerraform(struct!.partitionColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_frequency: {
      value: cdktf.stringToHclTerraform(struct!.partitionFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PipelineTablesSoftPartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PipelineTablesSoftPartitioning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPartitions = this._maxPartitions;
    }
    if (this._partitionColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionColumn = this._partitionColumn;
    }
    if (this._partitionFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionFrequency = this._partitionFrequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PipelineTablesSoftPartitioning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxPartitions = undefined;
      this._partitionColumn = undefined;
      this._partitionFrequency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxPartitions = value.maxPartitions;
      this._partitionColumn = value.partitionColumn;
      this._partitionFrequency = value.partitionFrequency;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_partitions - computed: false, optional: false, required: true
  private _maxPartitions?: number; 
  public get maxPartitions() {
    return this.getNumberAttribute('max_partitions');
  }
  public set maxPartitions(value: number) {
    this._maxPartitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionsInput() {
    return this._maxPartitions;
  }

  // partition_column - computed: false, optional: false, required: true
  private _partitionColumn?: string; 
  public get partitionColumn() {
    return this.getStringAttribute('partition_column');
  }
  public set partitionColumn(value: string) {
    this._partitionColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionColumnInput() {
    return this._partitionColumn;
  }

  // partition_frequency - computed: false, optional: false, required: true
  private _partitionFrequency?: string; 
  public get partitionFrequency() {
    return this.getStringAttribute('partition_frequency');
  }
  public set partitionFrequency(value: string) {
    this._partitionFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionFrequencyInput() {
    return this._partitionFrequency;
  }
}
export interface PipelineTables {
  /**
  * An optional alias for the table. If set, this will be the name of the destination table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#alias Pipeline#alias}
  */
  readonly alias?: string;
  /**
  * If set to true, Artie will backfill the history table with existing data. This is only applicable if `enable_history_mode` is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#backfill_history_table Pipeline#backfill_history_table}
  */
  readonly backfillHistoryTable?: boolean | cdktf.IResolvable;
  /**
  * An optional list of columns to exclude from syncing to the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#columns_to_exclude Pipeline#columns_to_exclude}
  */
  readonly columnsToExclude?: string[];
  /**
  * An optional list of columns to hash in the destination. Values for these columns will be obscured with a one-way hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#columns_to_hash Pipeline#columns_to_hash}
  */
  readonly columnsToHash?: string[];
  /**
  * An optional list of columns to include in replication. If not provided, all columns will be replicated. A pipeline can only have one of `columns_to_include` or `columns_to_exclude` set in any of its tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#columns_to_include Pipeline#columns_to_include}
  */
  readonly columnsToInclude?: string[];
  /**
  * If set to true, we will create an additional table in the destination (suffixed with `__history`) to store all changes to the source table over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#enable_history_mode Pipeline#enable_history_mode}
  */
  readonly enableHistoryMode?: boolean | cdktf.IResolvable;
  /**
  * If the source table is partitioned, set this to true and we will ingest data from all of its partitions. You may also need to customize `partition_suffix_regex_pattern` on the source reader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#is_partitioned Pipeline#is_partitioned}
  */
  readonly isPartitioned?: boolean | cdktf.IResolvable;
  /**
  * Optional: if the destination table is partitioned, specify the partition column(s) and type. This helps merge performance and currently only applies to Snowflake and BigQuery. For BigQuery, only one column can be specified and it may be either a time-partitioned or an integer range-partitioned column; set `partition_type` to 'time' or 'integer' accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#merge_predicates Pipeline#merge_predicates}
  */
  readonly mergePredicates?: PipelineTablesMergePredicates[] | cdktf.IResolvable;
  /**
  * The name of the table in the source database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#name Pipeline#name}
  */
  readonly name: string;
  /**
  * The name of the schema the table belongs to in the source database. This must be specified if your source database uses schemas (such as PostgreSQL), e.g. `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#schema Pipeline#schema}
  */
  readonly schema?: string;
  /**
  * If set to true, we will skip delete events for this table and only process insert and update events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#skip_deletes Pipeline#skip_deletes}
  */
  readonly skipDeletes?: boolean | cdktf.IResolvable;
  /**
  * Optional: configuration for soft partitioning of the destination table. This can improve query performance for large tables by partitioning data based on a specified column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#soft_partitioning Pipeline#soft_partitioning}
  */
  readonly softPartitioning?: PipelineTablesSoftPartitioning;
  /**
  * If set to true, we will replicate tables with the same name and schema name from all specified databases into the same destination table. This is only applicable if the source reader has `enable_unify_across_databases` set to true and `databases_to_unify` filled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#unify_across_databases Pipeline#unify_across_databases}
  */
  readonly unifyAcrossDatabases?: boolean | cdktf.IResolvable;
  /**
  * If set to true, we will replicate tables with the same name from all schemas into the same destination table. This is only applicable if the source reader has `enable_unify_across_schemas` set to true. You should still specify a schema name where this table exists; we will use that schema to fetch metadata for the table and validate its configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#unify_across_schemas Pipeline#unify_across_schemas}
  */
  readonly unifyAcrossSchemas?: boolean | cdktf.IResolvable;
}

export function pipelineTablesToTerraform(struct?: PipelineTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    backfill_history_table: cdktf.booleanToTerraform(struct!.backfillHistoryTable),
    columns_to_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnsToExclude),
    columns_to_hash: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnsToHash),
    columns_to_include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnsToInclude),
    enable_history_mode: cdktf.booleanToTerraform(struct!.enableHistoryMode),
    is_partitioned: cdktf.booleanToTerraform(struct!.isPartitioned),
    merge_predicates: cdktf.listMapper(pipelineTablesMergePredicatesToTerraform, false)(struct!.mergePredicates),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
    skip_deletes: cdktf.booleanToTerraform(struct!.skipDeletes),
    soft_partitioning: pipelineTablesSoftPartitioningToTerraform(struct!.softPartitioning),
    unify_across_databases: cdktf.booleanToTerraform(struct!.unifyAcrossDatabases),
    unify_across_schemas: cdktf.booleanToTerraform(struct!.unifyAcrossSchemas),
  }
}


export function pipelineTablesToHclTerraform(struct?: PipelineTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backfill_history_table: {
      value: cdktf.booleanToHclTerraform(struct!.backfillHistoryTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    columns_to_exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnsToExclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    columns_to_hash: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnsToHash),
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
    enable_history_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableHistoryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.isPartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    merge_predicates: {
      value: cdktf.listMapperHcl(pipelineTablesMergePredicatesToHclTerraform, false)(struct!.mergePredicates),
      isBlock: true,
      type: "list",
      storageClassType: "PipelineTablesMergePredicatesList",
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
    skip_deletes: {
      value: cdktf.booleanToHclTerraform(struct!.skipDeletes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soft_partitioning: {
      value: pipelineTablesSoftPartitioningToHclTerraform(struct!.softPartitioning),
      isBlock: true,
      type: "struct",
      storageClassType: "PipelineTablesSoftPartitioning",
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

export class PipelineTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PipelineTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._backfillHistoryTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.backfillHistoryTable = this._backfillHistoryTable;
    }
    if (this._columnsToExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnsToExclude = this._columnsToExclude;
    }
    if (this._columnsToHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnsToHash = this._columnsToHash;
    }
    if (this._columnsToInclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnsToInclude = this._columnsToInclude;
    }
    if (this._enableHistoryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHistoryMode = this._enableHistoryMode;
    }
    if (this._isPartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPartitioned = this._isPartitioned;
    }
    if (this._mergePredicates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergePredicates = this._mergePredicates?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._skipDeletes !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDeletes = this._skipDeletes;
    }
    if (this._softPartitioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softPartitioning = this._softPartitioning?.internalValue;
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

  public set internalValue(value: PipelineTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._backfillHistoryTable = undefined;
      this._columnsToExclude = undefined;
      this._columnsToHash = undefined;
      this._columnsToInclude = undefined;
      this._enableHistoryMode = undefined;
      this._isPartitioned = undefined;
      this._mergePredicates.internalValue = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._skipDeletes = undefined;
      this._softPartitioning.internalValue = undefined;
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
      this._alias = value.alias;
      this._backfillHistoryTable = value.backfillHistoryTable;
      this._columnsToExclude = value.columnsToExclude;
      this._columnsToHash = value.columnsToHash;
      this._columnsToInclude = value.columnsToInclude;
      this._enableHistoryMode = value.enableHistoryMode;
      this._isPartitioned = value.isPartitioned;
      this._mergePredicates.internalValue = value.mergePredicates;
      this._name = value.name;
      this._schema = value.schema;
      this._skipDeletes = value.skipDeletes;
      this._softPartitioning.internalValue = value.softPartitioning;
      this._unifyAcrossDatabases = value.unifyAcrossDatabases;
      this._unifyAcrossSchemas = value.unifyAcrossSchemas;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // backfill_history_table - computed: true, optional: true, required: false
  private _backfillHistoryTable?: boolean | cdktf.IResolvable; 
  public get backfillHistoryTable() {
    return this.getBooleanAttribute('backfill_history_table');
  }
  public set backfillHistoryTable(value: boolean | cdktf.IResolvable) {
    this._backfillHistoryTable = value;
  }
  public resetBackfillHistoryTable() {
    this._backfillHistoryTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillHistoryTableInput() {
    return this._backfillHistoryTable;
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

  // columns_to_hash - computed: true, optional: true, required: false
  private _columnsToHash?: string[]; 
  public get columnsToHash() {
    return this.getListAttribute('columns_to_hash');
  }
  public set columnsToHash(value: string[]) {
    this._columnsToHash = value;
  }
  public resetColumnsToHash() {
    this._columnsToHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsToHashInput() {
    return this._columnsToHash;
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

  // enable_history_mode - computed: true, optional: true, required: false
  private _enableHistoryMode?: boolean | cdktf.IResolvable; 
  public get enableHistoryMode() {
    return this.getBooleanAttribute('enable_history_mode');
  }
  public set enableHistoryMode(value: boolean | cdktf.IResolvable) {
    this._enableHistoryMode = value;
  }
  public resetEnableHistoryMode() {
    this._enableHistoryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHistoryModeInput() {
    return this._enableHistoryMode;
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

  // merge_predicates - computed: true, optional: true, required: false
  private _mergePredicates = new PipelineTablesMergePredicatesList(this, "merge_predicates", false);
  public get mergePredicates() {
    return this._mergePredicates;
  }
  public putMergePredicates(value: PipelineTablesMergePredicates[] | cdktf.IResolvable) {
    this._mergePredicates.internalValue = value;
  }
  public resetMergePredicates() {
    this._mergePredicates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergePredicatesInput() {
    return this._mergePredicates.internalValue;
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

  // skip_deletes - computed: true, optional: true, required: false
  private _skipDeletes?: boolean | cdktf.IResolvable; 
  public get skipDeletes() {
    return this.getBooleanAttribute('skip_deletes');
  }
  public set skipDeletes(value: boolean | cdktf.IResolvable) {
    this._skipDeletes = value;
  }
  public resetSkipDeletes() {
    this._skipDeletes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDeletesInput() {
    return this._skipDeletes;
  }

  // soft_partitioning - computed: false, optional: true, required: false
  private _softPartitioning = new PipelineTablesSoftPartitioningOutputReference(this, "soft_partitioning");
  public get softPartitioning() {
    return this._softPartitioning;
  }
  public putSoftPartitioning(value: PipelineTablesSoftPartitioning) {
    this._softPartitioning.internalValue = value;
  }
  public resetSoftPartitioning() {
    this._softPartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softPartitioningInput() {
    return this._softPartitioning.internalValue;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class PipelineTablesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PipelineTables } | cdktf.IResolvable

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
  public get(key: string): PipelineTablesOutputReference {
    return new PipelineTablesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline artie_pipeline}
*/
export class Pipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artie_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pipeline to import
  * @param importFromId The id of the existing Pipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artie_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.6/docs/resources/pipeline artie_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PipelineConfig
  */
  public constructor(scope: Construct, id: string, config: PipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'artie_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'artie',
        providerVersion: '2.3.6',
        providerVersionConstraint: '2.3.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataPlaneName = config.dataPlaneName;
    this._defaultSourceSchema = config.defaultSourceSchema;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._destinationConnectorUuid = config.destinationConnectorUuid;
    this._dropDeletedColumns = config.dropDeletedColumns;
    this._flushRules.internalValue = config.flushRules;
    this._includeArtieUpdatedAtColumn = config.includeArtieUpdatedAtColumn;
    this._includeDatabaseUpdatedAtColumn = config.includeDatabaseUpdatedAtColumn;
    this._name = config.name;
    this._softDeleteRows = config.softDeleteRows;
    this._sourceReaderUuid = config.sourceReaderUuid;
    this._splitEventsByType = config.splitEventsByType;
    this._tables.internalValue = config.tables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_source_schema - computed: true, optional: true, required: false
  private _defaultSourceSchema?: string; 
  public get defaultSourceSchema() {
    return this.getStringAttribute('default_source_schema');
  }
  public set defaultSourceSchema(value: string) {
    this._defaultSourceSchema = value;
  }
  public resetDefaultSourceSchema() {
    this._defaultSourceSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSourceSchemaInput() {
    return this._defaultSourceSchema;
  }

  // destination_config - computed: false, optional: false, required: true
  private _destinationConfig = new PipelineDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: PipelineDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // destination_connector_uuid - computed: false, optional: false, required: true
  private _destinationConnectorUuid?: string; 
  public get destinationConnectorUuid() {
    return this.getStringAttribute('destination_connector_uuid');
  }
  public set destinationConnectorUuid(value: string) {
    this._destinationConnectorUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConnectorUuidInput() {
    return this._destinationConnectorUuid;
  }

  // drop_deleted_columns - computed: true, optional: true, required: false
  private _dropDeletedColumns?: boolean | cdktf.IResolvable; 
  public get dropDeletedColumns() {
    return this.getBooleanAttribute('drop_deleted_columns');
  }
  public set dropDeletedColumns(value: boolean | cdktf.IResolvable) {
    this._dropDeletedColumns = value;
  }
  public resetDropDeletedColumns() {
    this._dropDeletedColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropDeletedColumnsInput() {
    return this._dropDeletedColumns;
  }

  // flush_rules - computed: true, optional: true, required: false
  private _flushRules = new PipelineFlushRulesOutputReference(this, "flush_rules");
  public get flushRules() {
    return this._flushRules;
  }
  public putFlushRules(value: PipelineFlushRules) {
    this._flushRules.internalValue = value;
  }
  public resetFlushRules() {
    this._flushRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushRulesInput() {
    return this._flushRules.internalValue;
  }

  // include_artie_updated_at_column - computed: true, optional: true, required: false
  private _includeArtieUpdatedAtColumn?: boolean | cdktf.IResolvable; 
  public get includeArtieUpdatedAtColumn() {
    return this.getBooleanAttribute('include_artie_updated_at_column');
  }
  public set includeArtieUpdatedAtColumn(value: boolean | cdktf.IResolvable) {
    this._includeArtieUpdatedAtColumn = value;
  }
  public resetIncludeArtieUpdatedAtColumn() {
    this._includeArtieUpdatedAtColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeArtieUpdatedAtColumnInput() {
    return this._includeArtieUpdatedAtColumn;
  }

  // include_database_updated_at_column - computed: true, optional: true, required: false
  private _includeDatabaseUpdatedAtColumn?: boolean | cdktf.IResolvable; 
  public get includeDatabaseUpdatedAtColumn() {
    return this.getBooleanAttribute('include_database_updated_at_column');
  }
  public set includeDatabaseUpdatedAtColumn(value: boolean | cdktf.IResolvable) {
    this._includeDatabaseUpdatedAtColumn = value;
  }
  public resetIncludeDatabaseUpdatedAtColumn() {
    this._includeDatabaseUpdatedAtColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDatabaseUpdatedAtColumnInput() {
    return this._includeDatabaseUpdatedAtColumn;
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

  // snowflake_eco_schedule_uuid - computed: true, optional: false, required: false
  public get snowflakeEcoScheduleUuid() {
    return this.getStringAttribute('snowflake_eco_schedule_uuid');
  }

  // soft_delete_rows - computed: true, optional: true, required: false
  private _softDeleteRows?: boolean | cdktf.IResolvable; 
  public get softDeleteRows() {
    return this.getBooleanAttribute('soft_delete_rows');
  }
  public set softDeleteRows(value: boolean | cdktf.IResolvable) {
    this._softDeleteRows = value;
  }
  public resetSoftDeleteRows() {
    this._softDeleteRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteRowsInput() {
    return this._softDeleteRows;
  }

  // source_reader_uuid - computed: false, optional: false, required: true
  private _sourceReaderUuid?: string; 
  public get sourceReaderUuid() {
    return this.getStringAttribute('source_reader_uuid');
  }
  public set sourceReaderUuid(value: string) {
    this._sourceReaderUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceReaderUuidInput() {
    return this._sourceReaderUuid;
  }

  // split_events_by_type - computed: true, optional: true, required: false
  private _splitEventsByType?: boolean | cdktf.IResolvable; 
  public get splitEventsByType() {
    return this.getBooleanAttribute('split_events_by_type');
  }
  public set splitEventsByType(value: boolean | cdktf.IResolvable) {
    this._splitEventsByType = value;
  }
  public resetSplitEventsByType() {
    this._splitEventsByType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitEventsByTypeInput() {
    return this._splitEventsByType;
  }

  // tables - computed: false, optional: false, required: true
  private _tables = new PipelineTablesMap(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: { [key: string]: PipelineTables } | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
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
      data_plane_name: cdktf.stringToTerraform(this._dataPlaneName),
      default_source_schema: cdktf.stringToTerraform(this._defaultSourceSchema),
      destination_config: pipelineDestinationConfigToTerraform(this._destinationConfig.internalValue),
      destination_connector_uuid: cdktf.stringToTerraform(this._destinationConnectorUuid),
      drop_deleted_columns: cdktf.booleanToTerraform(this._dropDeletedColumns),
      flush_rules: pipelineFlushRulesToTerraform(this._flushRules.internalValue),
      include_artie_updated_at_column: cdktf.booleanToTerraform(this._includeArtieUpdatedAtColumn),
      include_database_updated_at_column: cdktf.booleanToTerraform(this._includeDatabaseUpdatedAtColumn),
      name: cdktf.stringToTerraform(this._name),
      soft_delete_rows: cdktf.booleanToTerraform(this._softDeleteRows),
      source_reader_uuid: cdktf.stringToTerraform(this._sourceReaderUuid),
      split_events_by_type: cdktf.booleanToTerraform(this._splitEventsByType),
      tables: cdktf.hashMapper(pipelineTablesToTerraform)(this._tables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_plane_name: {
        value: cdktf.stringToHclTerraform(this._dataPlaneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_source_schema: {
        value: cdktf.stringToHclTerraform(this._defaultSourceSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_config: {
        value: pipelineDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineDestinationConfig",
      },
      destination_connector_uuid: {
        value: cdktf.stringToHclTerraform(this._destinationConnectorUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_deleted_columns: {
        value: cdktf.booleanToHclTerraform(this._dropDeletedColumns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flush_rules: {
        value: pipelineFlushRulesToHclTerraform(this._flushRules.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PipelineFlushRules",
      },
      include_artie_updated_at_column: {
        value: cdktf.booleanToHclTerraform(this._includeArtieUpdatedAtColumn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_database_updated_at_column: {
        value: cdktf.booleanToHclTerraform(this._includeDatabaseUpdatedAtColumn),
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
      soft_delete_rows: {
        value: cdktf.booleanToHclTerraform(this._softDeleteRows),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_reader_uuid: {
        value: cdktf.stringToHclTerraform(this._sourceReaderUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_events_by_type: {
        value: cdktf.booleanToHclTerraform(this._splitEventsByType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tables: {
        value: cdktf.hashMapperHcl(pipelineTablesToHclTerraform)(this._tables.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "PipelineTablesMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
