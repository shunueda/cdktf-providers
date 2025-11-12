// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceSqlserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies how the data for binary columns e.g. blob, binary, varbinary should be represented. This setting depends on what the destination is. See the documentation for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#binary_handling_mode SourceSqlserver#binary_handling_mode}
  */
  readonly binaryHandlingMode?: string;
  /**
  * Comma separated list of columns blacklist regular expressions, format schema[.]table[.](column1|column2|etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#column_exclude_list SourceSqlserver#column_exclude_list}
  */
  readonly columnExcludeList?: string;
  /**
  * Source Databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#database_dbname SourceSqlserver#database_dbname}
  */
  readonly databaseDbname: string;
  /**
  * SQLServer Hostname. For example, sqlserverdb.something.rds.amazonaws.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#database_hostname SourceSqlserver#database_hostname}
  */
  readonly databaseHostname: string;
  /**
  * Password to access the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#database_password SourceSqlserver#database_password}
  */
  readonly databasePassword: string;
  /**
  * SQLServer Port. For example, 1433
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#database_port SourceSqlserver#database_port}
  */
  readonly databasePort?: number;
  /**
  * Username to access the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#database_user SourceSqlserver#database_user}
  */
  readonly databaseUser: string;
  /**
  * Heartbeat Table Database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#heartbeat_data_collection_schema_or_database SourceSqlserver#heartbeat_data_collection_schema_or_database}
  */
  readonly heartbeatDataCollectionSchemaOrDatabase?: string;
  /**
  * Heartbeats are used to keep the pipeline healthy when there is a low volume of data at times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#heartbeat_enabled SourceSqlserver#heartbeat_enabled}
  */
  readonly heartbeatEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#insert_static_key_field SourceSqlserver#insert_static_key_field}
  */
  readonly insertStaticKeyField?: string;
  /**
  * The value of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#insert_static_key_value SourceSqlserver#insert_static_key_value}
  */
  readonly insertStaticKeyValue?: string;
  /**
  * The value of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#insert_static_value SourceSqlserver#insert_static_value}
  */
  readonly insertStaticValue?: string;
  /**
  * The name of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#insert_static_value_field SourceSqlserver#insert_static_value_field}
  */
  readonly insertStaticValueField?: string;
  /**
  * Source name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#name SourceSqlserver#name}
  */
  readonly name: string;
  /**
  * Source schemas to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#schema_include_list SourceSqlserver#schema_include_list}
  */
  readonly schemaIncludeList: string;
  /**
  * Schema for signal data collection. If connector is in read-only mode (snapshot_gtid="Yes"), set this to null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#signal_data_collection_schema_or_database SourceSqlserver#signal_data_collection_schema_or_database}
  */
  readonly signalDataCollectionSchemaOrDatabase?: string;
  /**
  * Explicitly set nb of parallel chunks for tables. Format: {"db.Some_Tbl": {"chunks": 5}}. This allows manual settings for parallelization when stats are outdated and estimated table size cannot be computed reliably
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#snapshot_custom_table_config SourceSqlserver#snapshot_custom_table_config}
  */
  readonly snapshotCustomTableConfig?: { [key: string]: SourceSqlserverSnapshotCustomTableConfig } | cdktf.IResolvable;
  /**
  * The threshold in MB for a Large Table to require multiple chunks to be read in parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#snapshot_large_table_threshold SourceSqlserver#snapshot_large_table_threshold}
  */
  readonly snapshotLargeTableThreshold?: number;
  /**
  * How many parallel chunk requests to send to the source DB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#snapshot_parallelism SourceSqlserver#snapshot_parallelism}
  */
  readonly snapshotParallelism?: number;
  /**
  * Connect via SSH tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#ssh_enabled SourceSqlserver#ssh_enabled}
  */
  readonly sshEnabled?: boolean | cdktf.IResolvable;
  /**
  * Hostname of the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#ssh_host SourceSqlserver#ssh_host}
  */
  readonly sshHost?: string;
  /**
  * Port of the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#ssh_port SourceSqlserver#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * User for connecting to the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#ssh_user SourceSqlserver#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * Source tables to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#table_include_list SourceSqlserver#table_include_list}
  */
  readonly tableIncludeList: string;
}
export interface SourceSqlserverSnapshotCustomTableConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#chunks SourceSqlserver#chunks}
  */
  readonly chunks: number;
}

export function sourceSqlserverSnapshotCustomTableConfigToTerraform(struct?: SourceSqlserverSnapshotCustomTableConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunks: cdktf.numberToTerraform(struct!.chunks),
  }
}


export function sourceSqlserverSnapshotCustomTableConfigToHclTerraform(struct?: SourceSqlserverSnapshotCustomTableConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunks: {
      value: cdktf.numberToHclTerraform(struct!.chunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSqlserverSnapshotCustomTableConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceSqlserverSnapshotCustomTableConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunks = this._chunks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSqlserverSnapshotCustomTableConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chunks = value.chunks;
    }
  }

  // chunks - computed: false, optional: false, required: true
  private _chunks?: number; 
  public get chunks() {
    return this.getNumberAttribute('chunks');
  }
  public set chunks(value: number) {
    this._chunks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chunksInput() {
    return this._chunks;
  }
}

export class SourceSqlserverSnapshotCustomTableConfigMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SourceSqlserverSnapshotCustomTableConfig } | cdktf.IResolvable

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
  public get(key: string): SourceSqlserverSnapshotCustomTableConfigOutputReference {
    return new SourceSqlserverSnapshotCustomTableConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver streamkap_source_sqlserver}
*/
export class SourceSqlserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_source_sqlserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceSqlserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceSqlserver to import
  * @param importFromId The id of the existing SourceSqlserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceSqlserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_source_sqlserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_sqlserver streamkap_source_sqlserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceSqlserverConfig
  */
  public constructor(scope: Construct, id: string, config: SourceSqlserverConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_source_sqlserver',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.15',
        providerVersionConstraint: '2.1.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binaryHandlingMode = config.binaryHandlingMode;
    this._columnExcludeList = config.columnExcludeList;
    this._databaseDbname = config.databaseDbname;
    this._databaseHostname = config.databaseHostname;
    this._databasePassword = config.databasePassword;
    this._databasePort = config.databasePort;
    this._databaseUser = config.databaseUser;
    this._heartbeatDataCollectionSchemaOrDatabase = config.heartbeatDataCollectionSchemaOrDatabase;
    this._heartbeatEnabled = config.heartbeatEnabled;
    this._insertStaticKeyField = config.insertStaticKeyField;
    this._insertStaticKeyValue = config.insertStaticKeyValue;
    this._insertStaticValue = config.insertStaticValue;
    this._insertStaticValueField = config.insertStaticValueField;
    this._name = config.name;
    this._schemaIncludeList = config.schemaIncludeList;
    this._signalDataCollectionSchemaOrDatabase = config.signalDataCollectionSchemaOrDatabase;
    this._snapshotCustomTableConfig.internalValue = config.snapshotCustomTableConfig;
    this._snapshotLargeTableThreshold = config.snapshotLargeTableThreshold;
    this._snapshotParallelism = config.snapshotParallelism;
    this._sshEnabled = config.sshEnabled;
    this._sshHost = config.sshHost;
    this._sshPort = config.sshPort;
    this._sshUser = config.sshUser;
    this._tableIncludeList = config.tableIncludeList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_handling_mode - computed: true, optional: true, required: false
  private _binaryHandlingMode?: string; 
  public get binaryHandlingMode() {
    return this.getStringAttribute('binary_handling_mode');
  }
  public set binaryHandlingMode(value: string) {
    this._binaryHandlingMode = value;
  }
  public resetBinaryHandlingMode() {
    this._binaryHandlingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryHandlingModeInput() {
    return this._binaryHandlingMode;
  }

  // column_exclude_list - computed: false, optional: true, required: false
  private _columnExcludeList?: string; 
  public get columnExcludeList() {
    return this.getStringAttribute('column_exclude_list');
  }
  public set columnExcludeList(value: string) {
    this._columnExcludeList = value;
  }
  public resetColumnExcludeList() {
    this._columnExcludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnExcludeListInput() {
    return this._columnExcludeList;
  }

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // database_dbname - computed: false, optional: false, required: true
  private _databaseDbname?: string; 
  public get databaseDbname() {
    return this.getStringAttribute('database_dbname');
  }
  public set databaseDbname(value: string) {
    this._databaseDbname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseDbnameInput() {
    return this._databaseDbname;
  }

  // database_hostname - computed: false, optional: false, required: true
  private _databaseHostname?: string; 
  public get databaseHostname() {
    return this.getStringAttribute('database_hostname');
  }
  public set databaseHostname(value: string) {
    this._databaseHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseHostnameInput() {
    return this._databaseHostname;
  }

  // database_password - computed: false, optional: false, required: true
  private _databasePassword?: string; 
  public get databasePassword() {
    return this.getStringAttribute('database_password');
  }
  public set databasePassword(value: string) {
    this._databasePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePasswordInput() {
    return this._databasePassword;
  }

  // database_port - computed: true, optional: true, required: false
  private _databasePort?: number; 
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }
  public set databasePort(value: number) {
    this._databasePort = value;
  }
  public resetDatabasePort() {
    this._databasePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePortInput() {
    return this._databasePort;
  }

  // database_user - computed: false, optional: false, required: true
  private _databaseUser?: string; 
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }
  public set databaseUser(value: string) {
    this._databaseUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserInput() {
    return this._databaseUser;
  }

  // heartbeat_data_collection_schema_or_database - computed: true, optional: true, required: false
  private _heartbeatDataCollectionSchemaOrDatabase?: string; 
  public get heartbeatDataCollectionSchemaOrDatabase() {
    return this.getStringAttribute('heartbeat_data_collection_schema_or_database');
  }
  public set heartbeatDataCollectionSchemaOrDatabase(value: string) {
    this._heartbeatDataCollectionSchemaOrDatabase = value;
  }
  public resetHeartbeatDataCollectionSchemaOrDatabase() {
    this._heartbeatDataCollectionSchemaOrDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatDataCollectionSchemaOrDatabaseInput() {
    return this._heartbeatDataCollectionSchemaOrDatabase;
  }

  // heartbeat_enabled - computed: true, optional: true, required: false
  private _heartbeatEnabled?: boolean | cdktf.IResolvable; 
  public get heartbeatEnabled() {
    return this.getBooleanAttribute('heartbeat_enabled');
  }
  public set heartbeatEnabled(value: boolean | cdktf.IResolvable) {
    this._heartbeatEnabled = value;
  }
  public resetHeartbeatEnabled() {
    this._heartbeatEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatEnabledInput() {
    return this._heartbeatEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insert_static_key_field - computed: true, optional: true, required: false
  private _insertStaticKeyField?: string; 
  public get insertStaticKeyField() {
    return this.getStringAttribute('insert_static_key_field');
  }
  public set insertStaticKeyField(value: string) {
    this._insertStaticKeyField = value;
  }
  public resetInsertStaticKeyField() {
    this._insertStaticKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyFieldInput() {
    return this._insertStaticKeyField;
  }

  // insert_static_key_value - computed: true, optional: true, required: false
  private _insertStaticKeyValue?: string; 
  public get insertStaticKeyValue() {
    return this.getStringAttribute('insert_static_key_value');
  }
  public set insertStaticKeyValue(value: string) {
    this._insertStaticKeyValue = value;
  }
  public resetInsertStaticKeyValue() {
    this._insertStaticKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyValueInput() {
    return this._insertStaticKeyValue;
  }

  // insert_static_value - computed: true, optional: true, required: false
  private _insertStaticValue?: string; 
  public get insertStaticValue() {
    return this.getStringAttribute('insert_static_value');
  }
  public set insertStaticValue(value: string) {
    this._insertStaticValue = value;
  }
  public resetInsertStaticValue() {
    this._insertStaticValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValueInput() {
    return this._insertStaticValue;
  }

  // insert_static_value_field - computed: true, optional: true, required: false
  private _insertStaticValueField?: string; 
  public get insertStaticValueField() {
    return this.getStringAttribute('insert_static_value_field');
  }
  public set insertStaticValueField(value: string) {
    this._insertStaticValueField = value;
  }
  public resetInsertStaticValueField() {
    this._insertStaticValueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValueFieldInput() {
    return this._insertStaticValueField;
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

  // schema_include_list - computed: false, optional: false, required: true
  private _schemaIncludeList?: string; 
  public get schemaIncludeList() {
    return this.getStringAttribute('schema_include_list');
  }
  public set schemaIncludeList(value: string) {
    this._schemaIncludeList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIncludeListInput() {
    return this._schemaIncludeList;
  }

  // signal_data_collection_schema_or_database - computed: false, optional: true, required: false
  private _signalDataCollectionSchemaOrDatabase?: string; 
  public get signalDataCollectionSchemaOrDatabase() {
    return this.getStringAttribute('signal_data_collection_schema_or_database');
  }
  public set signalDataCollectionSchemaOrDatabase(value: string) {
    this._signalDataCollectionSchemaOrDatabase = value;
  }
  public resetSignalDataCollectionSchemaOrDatabase() {
    this._signalDataCollectionSchemaOrDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalDataCollectionSchemaOrDatabaseInput() {
    return this._signalDataCollectionSchemaOrDatabase;
  }

  // snapshot_custom_table_config - computed: false, optional: true, required: false
  private _snapshotCustomTableConfig = new SourceSqlserverSnapshotCustomTableConfigMap(this, "snapshot_custom_table_config");
  public get snapshotCustomTableConfig() {
    return this._snapshotCustomTableConfig;
  }
  public putSnapshotCustomTableConfig(value: { [key: string]: SourceSqlserverSnapshotCustomTableConfig } | cdktf.IResolvable) {
    this._snapshotCustomTableConfig.internalValue = value;
  }
  public resetSnapshotCustomTableConfig() {
    this._snapshotCustomTableConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotCustomTableConfigInput() {
    return this._snapshotCustomTableConfig.internalValue;
  }

  // snapshot_large_table_threshold - computed: true, optional: true, required: false
  private _snapshotLargeTableThreshold?: number; 
  public get snapshotLargeTableThreshold() {
    return this.getNumberAttribute('snapshot_large_table_threshold');
  }
  public set snapshotLargeTableThreshold(value: number) {
    this._snapshotLargeTableThreshold = value;
  }
  public resetSnapshotLargeTableThreshold() {
    this._snapshotLargeTableThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotLargeTableThresholdInput() {
    return this._snapshotLargeTableThreshold;
  }

  // snapshot_parallelism - computed: true, optional: true, required: false
  private _snapshotParallelism?: number; 
  public get snapshotParallelism() {
    return this.getNumberAttribute('snapshot_parallelism');
  }
  public set snapshotParallelism(value: number) {
    this._snapshotParallelism = value;
  }
  public resetSnapshotParallelism() {
    this._snapshotParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotParallelismInput() {
    return this._snapshotParallelism;
  }

  // ssh_enabled - computed: true, optional: true, required: false
  private _sshEnabled?: boolean | cdktf.IResolvable; 
  public get sshEnabled() {
    return this.getBooleanAttribute('ssh_enabled');
  }
  public set sshEnabled(value: boolean | cdktf.IResolvable) {
    this._sshEnabled = value;
  }
  public resetSshEnabled() {
    this._sshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshEnabledInput() {
    return this._sshEnabled;
  }

  // ssh_host - computed: false, optional: true, required: false
  private _sshHost?: string; 
  public get sshHost() {
    return this.getStringAttribute('ssh_host');
  }
  public set sshHost(value: string) {
    this._sshHost = value;
  }
  public resetSshHost() {
    this._sshHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostInput() {
    return this._sshHost;
  }

  // ssh_port - computed: true, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // ssh_user - computed: true, optional: true, required: false
  private _sshUser?: string; 
  public get sshUser() {
    return this.getStringAttribute('ssh_user');
  }
  public set sshUser(value: string) {
    this._sshUser = value;
  }
  public resetSshUser() {
    this._sshUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserInput() {
    return this._sshUser;
  }

  // table_include_list - computed: false, optional: false, required: true
  private _tableIncludeList?: string; 
  public get tableIncludeList() {
    return this.getStringAttribute('table_include_list');
  }
  public set tableIncludeList(value: string) {
    this._tableIncludeList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIncludeListInput() {
    return this._tableIncludeList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binary_handling_mode: cdktf.stringToTerraform(this._binaryHandlingMode),
      column_exclude_list: cdktf.stringToTerraform(this._columnExcludeList),
      database_dbname: cdktf.stringToTerraform(this._databaseDbname),
      database_hostname: cdktf.stringToTerraform(this._databaseHostname),
      database_password: cdktf.stringToTerraform(this._databasePassword),
      database_port: cdktf.numberToTerraform(this._databasePort),
      database_user: cdktf.stringToTerraform(this._databaseUser),
      heartbeat_data_collection_schema_or_database: cdktf.stringToTerraform(this._heartbeatDataCollectionSchemaOrDatabase),
      heartbeat_enabled: cdktf.booleanToTerraform(this._heartbeatEnabled),
      insert_static_key_field: cdktf.stringToTerraform(this._insertStaticKeyField),
      insert_static_key_value: cdktf.stringToTerraform(this._insertStaticKeyValue),
      insert_static_value: cdktf.stringToTerraform(this._insertStaticValue),
      insert_static_value_field: cdktf.stringToTerraform(this._insertStaticValueField),
      name: cdktf.stringToTerraform(this._name),
      schema_include_list: cdktf.stringToTerraform(this._schemaIncludeList),
      signal_data_collection_schema_or_database: cdktf.stringToTerraform(this._signalDataCollectionSchemaOrDatabase),
      snapshot_custom_table_config: cdktf.hashMapper(sourceSqlserverSnapshotCustomTableConfigToTerraform)(this._snapshotCustomTableConfig.internalValue),
      snapshot_large_table_threshold: cdktf.numberToTerraform(this._snapshotLargeTableThreshold),
      snapshot_parallelism: cdktf.numberToTerraform(this._snapshotParallelism),
      ssh_enabled: cdktf.booleanToTerraform(this._sshEnabled),
      ssh_host: cdktf.stringToTerraform(this._sshHost),
      ssh_port: cdktf.stringToTerraform(this._sshPort),
      ssh_user: cdktf.stringToTerraform(this._sshUser),
      table_include_list: cdktf.stringToTerraform(this._tableIncludeList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binary_handling_mode: {
        value: cdktf.stringToHclTerraform(this._binaryHandlingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_exclude_list: {
        value: cdktf.stringToHclTerraform(this._columnExcludeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_dbname: {
        value: cdktf.stringToHclTerraform(this._databaseDbname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_hostname: {
        value: cdktf.stringToHclTerraform(this._databaseHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_password: {
        value: cdktf.stringToHclTerraform(this._databasePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_port: {
        value: cdktf.numberToHclTerraform(this._databasePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_user: {
        value: cdktf.stringToHclTerraform(this._databaseUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heartbeat_data_collection_schema_or_database: {
        value: cdktf.stringToHclTerraform(this._heartbeatDataCollectionSchemaOrDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heartbeat_enabled: {
        value: cdktf.booleanToHclTerraform(this._heartbeatEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insert_static_key_field: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_key_value: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value: {
        value: cdktf.stringToHclTerraform(this._insertStaticValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value_field: {
        value: cdktf.stringToHclTerraform(this._insertStaticValueField),
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
      schema_include_list: {
        value: cdktf.stringToHclTerraform(this._schemaIncludeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal_data_collection_schema_or_database: {
        value: cdktf.stringToHclTerraform(this._signalDataCollectionSchemaOrDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_custom_table_config: {
        value: cdktf.hashMapperHcl(sourceSqlserverSnapshotCustomTableConfigToHclTerraform)(this._snapshotCustomTableConfig.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SourceSqlserverSnapshotCustomTableConfigMap",
      },
      snapshot_large_table_threshold: {
        value: cdktf.numberToHclTerraform(this._snapshotLargeTableThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_parallelism: {
        value: cdktf.numberToHclTerraform(this._snapshotParallelism),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_enabled: {
        value: cdktf.booleanToHclTerraform(this._sshEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_host: {
        value: cdktf.stringToHclTerraform(this._sshHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_port: {
        value: cdktf.stringToHclTerraform(this._sshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_user: {
        value: cdktf.stringToHclTerraform(this._sshUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_include_list: {
        value: cdktf.stringToHclTerraform(this._tableIncludeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
