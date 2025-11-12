// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceMysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies how the data for binary columns e.g. blob, binary, varbinary should be represented. This setting depends on what the destination is. See the documentation for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#binary_handling_mode SourceMysql#binary_handling_mode}
  */
  readonly binaryHandlingMode?: string;
  /**
  * Comma separated list of columns blacklist regular expressions, format schema[.]table[.](column1|column2|etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#column_exclude_list SourceMysql#column_exclude_list}
  */
  readonly columnExcludeList?: string;
  /**
  * Comma separated list of columns whitelist regular expressions, format schema[.]table[.](column1|column2|etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#column_include_list SourceMysql#column_include_list}
  */
  readonly columnIncludeList?: string;
  /**
  * Set the connection timezone. If set to SERVER, the source will detect the connection time zone from the values configured on the MySQL server session variables 'time_zone' or 'system_time_zone'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#database_connection_timezone SourceMysql#database_connection_timezone}
  */
  readonly databaseConnectionTimezone?: string;
  /**
  * MySQL Hostname. For example, mysqldb.something.rds.amazonaws.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#database_hostname SourceMysql#database_hostname}
  */
  readonly databaseHostname: string;
  /**
  * Source Databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#database_include_list SourceMysql#database_include_list}
  */
  readonly databaseIncludeList: string;
  /**
  * Password to access the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#database_password SourceMysql#database_password}
  */
  readonly databasePassword: string;
  /**
  * MySQL Port. For example, 3306
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#database_port SourceMysql#database_port}
  */
  readonly databasePort?: number;
  /**
  * Username to access the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#database_user SourceMysql#database_user}
  */
  readonly databaseUser: string;
  /**
  * Heartbeat Table Database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#heartbeat_data_collection_schema_or_database SourceMysql#heartbeat_data_collection_schema_or_database}
  */
  readonly heartbeatDataCollectionSchemaOrDatabase?: string;
  /**
  * Heartbeats are used to keep the pipeline healthy when there is a low volume of data at times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#heartbeat_enabled SourceMysql#heartbeat_enabled}
  */
  readonly heartbeatEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#insert_static_key_field_1 SourceMysql#insert_static_key_field_1}
  */
  readonly insertStaticKeyField1?: string;
  /**
  * The name of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#insert_static_key_field_2 SourceMysql#insert_static_key_field_2}
  */
  readonly insertStaticKeyField2?: string;
  /**
  * The value of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#insert_static_key_value_1 SourceMysql#insert_static_key_value_1}
  */
  readonly insertStaticKeyValue1?: string;
  /**
  * The value of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#insert_static_key_value_2 SourceMysql#insert_static_key_value_2}
  */
  readonly insertStaticKeyValue2?: string;
  /**
  * The value of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#insert_static_value_1 SourceMysql#insert_static_value_1}
  */
  readonly insertStaticValue1?: string;
  /**
  * The value of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#insert_static_value_2 SourceMysql#insert_static_value_2}
  */
  readonly insertStaticValue2?: string;
  /**
  * The name of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#insert_static_value_field_1 SourceMysql#insert_static_value_field_1}
  */
  readonly insertStaticValueField1?: string;
  /**
  * The name of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#insert_static_value_field_2 SourceMysql#insert_static_value_field_2}
  */
  readonly insertStaticValueField2?: string;
  /**
  * Source name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#name SourceMysql#name}
  */
  readonly name: string;
  /**
  * Regex pattern to match topics for enrichment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#predicates_istopictoenrich_pattern SourceMysql#predicates_istopictoenrich_pattern}
  */
  readonly predicatesIstopictoenrichPattern?: string;
  /**
  * Schema for signal data collection. If connector is in read-only mode (snapshot_gtid="Yes"), set this to null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#signal_data_collection_schema_or_database SourceMysql#signal_data_collection_schema_or_database}
  */
  readonly signalDataCollectionSchemaOrDatabase?: string;
  /**
  * GTID snapshots are read only but require some prerequisite settings, including enabling GTID on the source database. See the documentation for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#snapshot_gtid SourceMysql#snapshot_gtid}
  */
  readonly snapshotGtid?: boolean | cdktf.IResolvable;
  /**
  * Connect via SSH tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#ssh_enabled SourceMysql#ssh_enabled}
  */
  readonly sshEnabled?: boolean | cdktf.IResolvable;
  /**
  * Hostname of the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#ssh_host SourceMysql#ssh_host}
  */
  readonly sshHost?: string;
  /**
  * Port of the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#ssh_port SourceMysql#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * User for connecting to the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#ssh_user SourceMysql#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * Source tables to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#table_include_list SourceMysql#table_include_list}
  */
  readonly tableIncludeList: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql streamkap_source_mysql}
*/
export class SourceMysql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_source_mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceMysql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceMysql to import
  * @param importFromId The id of the existing SourceMysql that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceMysql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_source_mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_mysql streamkap_source_mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceMysqlConfig
  */
  public constructor(scope: Construct, id: string, config: SourceMysqlConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_source_mysql',
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
    this._columnIncludeList = config.columnIncludeList;
    this._databaseConnectionTimezone = config.databaseConnectionTimezone;
    this._databaseHostname = config.databaseHostname;
    this._databaseIncludeList = config.databaseIncludeList;
    this._databasePassword = config.databasePassword;
    this._databasePort = config.databasePort;
    this._databaseUser = config.databaseUser;
    this._heartbeatDataCollectionSchemaOrDatabase = config.heartbeatDataCollectionSchemaOrDatabase;
    this._heartbeatEnabled = config.heartbeatEnabled;
    this._insertStaticKeyField1 = config.insertStaticKeyField1;
    this._insertStaticKeyField2 = config.insertStaticKeyField2;
    this._insertStaticKeyValue1 = config.insertStaticKeyValue1;
    this._insertStaticKeyValue2 = config.insertStaticKeyValue2;
    this._insertStaticValue1 = config.insertStaticValue1;
    this._insertStaticValue2 = config.insertStaticValue2;
    this._insertStaticValueField1 = config.insertStaticValueField1;
    this._insertStaticValueField2 = config.insertStaticValueField2;
    this._name = config.name;
    this._predicatesIstopictoenrichPattern = config.predicatesIstopictoenrichPattern;
    this._signalDataCollectionSchemaOrDatabase = config.signalDataCollectionSchemaOrDatabase;
    this._snapshotGtid = config.snapshotGtid;
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

  // column_include_list - computed: false, optional: true, required: false
  private _columnIncludeList?: string; 
  public get columnIncludeList() {
    return this.getStringAttribute('column_include_list');
  }
  public set columnIncludeList(value: string) {
    this._columnIncludeList = value;
  }
  public resetColumnIncludeList() {
    this._columnIncludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnIncludeListInput() {
    return this._columnIncludeList;
  }

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // database_connection_timezone - computed: true, optional: true, required: false
  private _databaseConnectionTimezone?: string; 
  public get databaseConnectionTimezone() {
    return this.getStringAttribute('database_connection_timezone');
  }
  public set databaseConnectionTimezone(value: string) {
    this._databaseConnectionTimezone = value;
  }
  public resetDatabaseConnectionTimezone() {
    this._databaseConnectionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConnectionTimezoneInput() {
    return this._databaseConnectionTimezone;
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

  // database_include_list - computed: false, optional: false, required: true
  private _databaseIncludeList?: string; 
  public get databaseIncludeList() {
    return this.getStringAttribute('database_include_list');
  }
  public set databaseIncludeList(value: string) {
    this._databaseIncludeList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIncludeListInput() {
    return this._databaseIncludeList;
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

  // heartbeat_data_collection_schema_or_database - computed: false, optional: true, required: false
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

  // insert_static_key_field_1 - computed: true, optional: true, required: false
  private _insertStaticKeyField1?: string; 
  public get insertStaticKeyField1() {
    return this.getStringAttribute('insert_static_key_field_1');
  }
  public set insertStaticKeyField1(value: string) {
    this._insertStaticKeyField1 = value;
  }
  public resetInsertStaticKeyField1() {
    this._insertStaticKeyField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyField1Input() {
    return this._insertStaticKeyField1;
  }

  // insert_static_key_field_2 - computed: true, optional: true, required: false
  private _insertStaticKeyField2?: string; 
  public get insertStaticKeyField2() {
    return this.getStringAttribute('insert_static_key_field_2');
  }
  public set insertStaticKeyField2(value: string) {
    this._insertStaticKeyField2 = value;
  }
  public resetInsertStaticKeyField2() {
    this._insertStaticKeyField2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyField2Input() {
    return this._insertStaticKeyField2;
  }

  // insert_static_key_value_1 - computed: true, optional: true, required: false
  private _insertStaticKeyValue1?: string; 
  public get insertStaticKeyValue1() {
    return this.getStringAttribute('insert_static_key_value_1');
  }
  public set insertStaticKeyValue1(value: string) {
    this._insertStaticKeyValue1 = value;
  }
  public resetInsertStaticKeyValue1() {
    this._insertStaticKeyValue1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyValue1Input() {
    return this._insertStaticKeyValue1;
  }

  // insert_static_key_value_2 - computed: true, optional: true, required: false
  private _insertStaticKeyValue2?: string; 
  public get insertStaticKeyValue2() {
    return this.getStringAttribute('insert_static_key_value_2');
  }
  public set insertStaticKeyValue2(value: string) {
    this._insertStaticKeyValue2 = value;
  }
  public resetInsertStaticKeyValue2() {
    this._insertStaticKeyValue2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyValue2Input() {
    return this._insertStaticKeyValue2;
  }

  // insert_static_value_1 - computed: true, optional: true, required: false
  private _insertStaticValue1?: string; 
  public get insertStaticValue1() {
    return this.getStringAttribute('insert_static_value_1');
  }
  public set insertStaticValue1(value: string) {
    this._insertStaticValue1 = value;
  }
  public resetInsertStaticValue1() {
    this._insertStaticValue1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValue1Input() {
    return this._insertStaticValue1;
  }

  // insert_static_value_2 - computed: true, optional: true, required: false
  private _insertStaticValue2?: string; 
  public get insertStaticValue2() {
    return this.getStringAttribute('insert_static_value_2');
  }
  public set insertStaticValue2(value: string) {
    this._insertStaticValue2 = value;
  }
  public resetInsertStaticValue2() {
    this._insertStaticValue2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValue2Input() {
    return this._insertStaticValue2;
  }

  // insert_static_value_field_1 - computed: true, optional: true, required: false
  private _insertStaticValueField1?: string; 
  public get insertStaticValueField1() {
    return this.getStringAttribute('insert_static_value_field_1');
  }
  public set insertStaticValueField1(value: string) {
    this._insertStaticValueField1 = value;
  }
  public resetInsertStaticValueField1() {
    this._insertStaticValueField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValueField1Input() {
    return this._insertStaticValueField1;
  }

  // insert_static_value_field_2 - computed: true, optional: true, required: false
  private _insertStaticValueField2?: string; 
  public get insertStaticValueField2() {
    return this.getStringAttribute('insert_static_value_field_2');
  }
  public set insertStaticValueField2(value: string) {
    this._insertStaticValueField2 = value;
  }
  public resetInsertStaticValueField2() {
    this._insertStaticValueField2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValueField2Input() {
    return this._insertStaticValueField2;
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

  // predicates_istopictoenrich_pattern - computed: true, optional: true, required: false
  private _predicatesIstopictoenrichPattern?: string; 
  public get predicatesIstopictoenrichPattern() {
    return this.getStringAttribute('predicates_istopictoenrich_pattern');
  }
  public set predicatesIstopictoenrichPattern(value: string) {
    this._predicatesIstopictoenrichPattern = value;
  }
  public resetPredicatesIstopictoenrichPattern() {
    this._predicatesIstopictoenrichPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesIstopictoenrichPatternInput() {
    return this._predicatesIstopictoenrichPattern;
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

  // snapshot_gtid - computed: true, optional: true, required: false
  private _snapshotGtid?: boolean | cdktf.IResolvable; 
  public get snapshotGtid() {
    return this.getBooleanAttribute('snapshot_gtid');
  }
  public set snapshotGtid(value: boolean | cdktf.IResolvable) {
    this._snapshotGtid = value;
  }
  public resetSnapshotGtid() {
    this._snapshotGtid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotGtidInput() {
    return this._snapshotGtid;
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
      column_include_list: cdktf.stringToTerraform(this._columnIncludeList),
      database_connection_timezone: cdktf.stringToTerraform(this._databaseConnectionTimezone),
      database_hostname: cdktf.stringToTerraform(this._databaseHostname),
      database_include_list: cdktf.stringToTerraform(this._databaseIncludeList),
      database_password: cdktf.stringToTerraform(this._databasePassword),
      database_port: cdktf.numberToTerraform(this._databasePort),
      database_user: cdktf.stringToTerraform(this._databaseUser),
      heartbeat_data_collection_schema_or_database: cdktf.stringToTerraform(this._heartbeatDataCollectionSchemaOrDatabase),
      heartbeat_enabled: cdktf.booleanToTerraform(this._heartbeatEnabled),
      insert_static_key_field_1: cdktf.stringToTerraform(this._insertStaticKeyField1),
      insert_static_key_field_2: cdktf.stringToTerraform(this._insertStaticKeyField2),
      insert_static_key_value_1: cdktf.stringToTerraform(this._insertStaticKeyValue1),
      insert_static_key_value_2: cdktf.stringToTerraform(this._insertStaticKeyValue2),
      insert_static_value_1: cdktf.stringToTerraform(this._insertStaticValue1),
      insert_static_value_2: cdktf.stringToTerraform(this._insertStaticValue2),
      insert_static_value_field_1: cdktf.stringToTerraform(this._insertStaticValueField1),
      insert_static_value_field_2: cdktf.stringToTerraform(this._insertStaticValueField2),
      name: cdktf.stringToTerraform(this._name),
      predicates_istopictoenrich_pattern: cdktf.stringToTerraform(this._predicatesIstopictoenrichPattern),
      signal_data_collection_schema_or_database: cdktf.stringToTerraform(this._signalDataCollectionSchemaOrDatabase),
      snapshot_gtid: cdktf.booleanToTerraform(this._snapshotGtid),
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
      column_include_list: {
        value: cdktf.stringToHclTerraform(this._columnIncludeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_connection_timezone: {
        value: cdktf.stringToHclTerraform(this._databaseConnectionTimezone),
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
      database_include_list: {
        value: cdktf.stringToHclTerraform(this._databaseIncludeList),
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
      insert_static_key_field_1: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_key_field_2: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyField2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_key_value_1: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyValue1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_key_value_2: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyValue2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value_1: {
        value: cdktf.stringToHclTerraform(this._insertStaticValue1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value_2: {
        value: cdktf.stringToHclTerraform(this._insertStaticValue2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value_field_1: {
        value: cdktf.stringToHclTerraform(this._insertStaticValueField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value_field_2: {
        value: cdktf.stringToHclTerraform(this._insertStaticValueField2),
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
      predicates_istopictoenrich_pattern: {
        value: cdktf.stringToHclTerraform(this._predicatesIstopictoenrichPattern),
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
      snapshot_gtid: {
        value: cdktf.booleanToHclTerraform(this._snapshotGtid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
