// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * The arn of AWS IAM role, used for importing from S3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#aws_role_arn Import#aws_role_arn}
  */
  readonly awsRoleArn?: string;
  /**
  * The ID of your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#cluster_id Import#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The CSV configuration.See https://docs.pingcap.com/tidbcloud/csv-config-for-import-data for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#csv_format Import#csv_format}
  */
  readonly csvFormat?: ImportCsvFormat;
  /**
  * The format of data to import.Enum: "SqlFile" "AuroraSnapshot" "CSV" "Parquet".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#data_format Import#data_format}
  */
  readonly dataFormat: string;
  /**
  * The local file path, used for importing from LOCAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#file_name Import#file_name}
  */
  readonly fileName?: string;
  /**
  * The ID of the project. You can get the project ID from [tidbcloud_projects datasource](../data-sources/projects.md).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#project_id Import#project_id}
  */
  readonly projectId: string;
  /**
  * The full s3 path that contains data to import, used for importing from S3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#source_url Import#source_url}
  */
  readonly sourceUrl?: string;
  /**
  * The target db and table to import data, used for importing from LOCAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#target_table Import#target_table}
  */
  readonly targetTable?: ImportTargetTable;
  /**
  * The type of data source. Enum: "S3" "LOCAL".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#type Import#type}
  */
  readonly type: string;
}
export interface ImportAllCompletedTables {
}

export function importAllCompletedTablesToTerraform(struct?: ImportAllCompletedTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function importAllCompletedTablesToHclTerraform(struct?: ImportAllCompletedTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImportAllCompletedTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImportAllCompletedTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportAllCompletedTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class ImportAllCompletedTablesList extends cdktf.ComplexList {

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
  public get(index: number): ImportAllCompletedTablesOutputReference {
    return new ImportAllCompletedTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImportCsvFormat {
  /**
  * In CSV file whether to parse backslash inside fields as escape characters (default true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#backslash_escape Import#backslash_escape}
  */
  readonly backslashEscape?: boolean | cdktf.IResolvable;
  /**
  * The delimiter used for quoting of CSV file (default "\"").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#delimiter Import#delimiter}
  */
  readonly delimiter?: string;
  /**
  * In CSV file whether regard the first row as header (default true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#header Import#header}
  */
  readonly header?: boolean | cdktf.IResolvable;
  /**
  * The field separator of CSV file (default ",").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#separator Import#separator}
  */
  readonly separator?: string;
  /**
  * In CSV file whether to treat Separator as the line terminator and trim all trailing separators (default false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#trim_last_separator Import#trim_last_separator}
  */
  readonly trimLastSeparator?: boolean | cdktf.IResolvable;
}

export function importCsvFormatToTerraform(struct?: ImportCsvFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backslash_escape: cdktf.booleanToTerraform(struct!.backslashEscape),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    header: cdktf.booleanToTerraform(struct!.header),
    separator: cdktf.stringToTerraform(struct!.separator),
    trim_last_separator: cdktf.booleanToTerraform(struct!.trimLastSeparator),
  }
}


export function importCsvFormatToHclTerraform(struct?: ImportCsvFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backslash_escape: {
      value: cdktf.booleanToHclTerraform(struct!.backslashEscape),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.booleanToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim_last_separator: {
      value: cdktf.booleanToHclTerraform(struct!.trimLastSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportCsvFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImportCsvFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backslashEscape !== undefined) {
      hasAnyValues = true;
      internalValueResult.backslashEscape = this._backslashEscape;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._trimLastSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.trimLastSeparator = this._trimLastSeparator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportCsvFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backslashEscape = undefined;
      this._delimiter = undefined;
      this._header = undefined;
      this._separator = undefined;
      this._trimLastSeparator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backslashEscape = value.backslashEscape;
      this._delimiter = value.delimiter;
      this._header = value.header;
      this._separator = value.separator;
      this._trimLastSeparator = value.trimLastSeparator;
    }
  }

  // backslash_escape - computed: false, optional: true, required: false
  private _backslashEscape?: boolean | cdktf.IResolvable; 
  public get backslashEscape() {
    return this.getBooleanAttribute('backslash_escape');
  }
  public set backslashEscape(value: boolean | cdktf.IResolvable) {
    this._backslashEscape = value;
  }
  public resetBackslashEscape() {
    this._backslashEscape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backslashEscapeInput() {
    return this._backslashEscape;
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // header - computed: false, optional: true, required: false
  private _header?: boolean | cdktf.IResolvable; 
  public get header() {
    return this.getBooleanAttribute('header');
  }
  public set header(value: boolean | cdktf.IResolvable) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // trim_last_separator - computed: false, optional: true, required: false
  private _trimLastSeparator?: boolean | cdktf.IResolvable; 
  public get trimLastSeparator() {
    return this.getBooleanAttribute('trim_last_separator');
  }
  public set trimLastSeparator(value: boolean | cdktf.IResolvable) {
    this._trimLastSeparator = value;
  }
  public resetTrimLastSeparator() {
    this._trimLastSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimLastSeparatorInput() {
    return this._trimLastSeparator;
  }
}
export interface ImportTargetTable {
  /**
  * The database of your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#database Import#database}
  */
  readonly database?: string;
  /**
  * The table of your cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#table Import#table}
  */
  readonly table?: string;
}

export function importTargetTableToTerraform(struct?: ImportTargetTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function importTargetTableToHclTerraform(struct?: ImportTargetTable | cdktf.IResolvable): any {
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
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportTargetTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImportTargetTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportTargetTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._table = value.table;
    }
  }

  // database - computed: false, optional: true, required: false
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

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import tidbcloud_import}
*/
export class Import extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Import resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Import to import
  * @param importFromId The id of the existing Import that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Import to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/resources/import tidbcloud_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportConfig
  */
  public constructor(scope: Construct, id: string, config: ImportConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_import',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsRoleArn = config.awsRoleArn;
    this._clusterId = config.clusterId;
    this._csvFormat.internalValue = config.csvFormat;
    this._dataFormat = config.dataFormat;
    this._fileName = config.fileName;
    this._projectId = config.projectId;
    this._sourceUrl = config.sourceUrl;
    this._targetTable.internalValue = config.targetTable;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_completed_tables - computed: true, optional: false, required: false
  private _allCompletedTables = new ImportAllCompletedTablesList(this, "all_completed_tables", false);
  public get allCompletedTables() {
    return this._allCompletedTables;
  }

  // aws_role_arn - computed: false, optional: true, required: false
  private _awsRoleArn?: string; 
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }
  public set awsRoleArn(value: string) {
    this._awsRoleArn = value;
  }
  public resetAwsRoleArn() {
    this._awsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnInput() {
    return this._awsRoleArn;
  }

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

  // completed_percent - computed: true, optional: false, required: false
  public get completedPercent() {
    return this.getNumberAttribute('completed_percent');
  }

  // completed_tables - computed: true, optional: false, required: false
  public get completedTables() {
    return this.getNumberAttribute('completed_tables');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // csv_format - computed: false, optional: true, required: false
  private _csvFormat = new ImportCsvFormatOutputReference(this, "csv_format");
  public get csvFormat() {
    return this._csvFormat;
  }
  public putCsvFormat(value: ImportCsvFormat) {
    this._csvFormat.internalValue = value;
  }
  public resetCsvFormat() {
    this._csvFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvFormatInput() {
    return this._csvFormat.internalValue;
  }

  // data_format - computed: false, optional: false, required: true
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }

  // elapsed_time_seconds - computed: true, optional: false, required: false
  public get elapsedTimeSeconds() {
    return this.getNumberAttribute('elapsed_time_seconds');
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // new_file_name - computed: true, optional: false, required: false
  public get newFileName() {
    return this.getStringAttribute('new_file_name');
  }

  // pending_tables - computed: true, optional: false, required: false
  public get pendingTables() {
    return this.getNumberAttribute('pending_tables');
  }

  // post_import_completed_percent - computed: true, optional: false, required: false
  public get postImportCompletedPercent() {
    return this.getNumberAttribute('post_import_completed_percent');
  }

  // processed_source_data_size - computed: true, optional: false, required: false
  public get processedSourceDataSize() {
    return this.getStringAttribute('processed_source_data_size');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // source_url - computed: false, optional: true, required: false
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  public resetSourceUrl() {
    this._sourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_table - computed: false, optional: true, required: false
  private _targetTable = new ImportTargetTableOutputReference(this, "target_table");
  public get targetTable() {
    return this._targetTable;
  }
  public putTargetTable(value: ImportTargetTable) {
    this._targetTable.internalValue = value;
  }
  public resetTargetTable() {
    this._targetTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTableInput() {
    return this._targetTable.internalValue;
  }

  // total_files - computed: true, optional: false, required: false
  public get totalFiles() {
    return this.getNumberAttribute('total_files');
  }

  // total_size - computed: true, optional: false, required: false
  public get totalSize() {
    return this.getStringAttribute('total_size');
  }

  // total_tables_count - computed: true, optional: false, required: false
  public get totalTablesCount() {
    return this.getNumberAttribute('total_tables_count');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_role_arn: cdktf.stringToTerraform(this._awsRoleArn),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      csv_format: importCsvFormatToTerraform(this._csvFormat.internalValue),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      file_name: cdktf.stringToTerraform(this._fileName),
      project_id: cdktf.stringToTerraform(this._projectId),
      source_url: cdktf.stringToTerraform(this._sourceUrl),
      target_table: importTargetTableToTerraform(this._targetTable.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_role_arn: {
        value: cdktf.stringToHclTerraform(this._awsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_format: {
        value: importCsvFormatToHclTerraform(this._csvFormat.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImportCsvFormat",
      },
      data_format: {
        value: cdktf.stringToHclTerraform(this._dataFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_url: {
        value: cdktf.stringToHclTerraform(this._sourceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_table: {
        value: importTargetTableToHclTerraform(this._targetTable.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImportTargetTable",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
