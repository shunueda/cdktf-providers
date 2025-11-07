// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationSnowflakeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether the connector should create Dyanmic Tables & Cleanup Task (applies to `append` mode only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#apply_dynamic_table_script DestinationSnowflake#apply_dynamic_table_script}
  */
  readonly applyDynamicTableScript?: boolean | cdktf.IResolvable;
  /**
  * Mapping between the tables that store append-only data and the deduplicated tables, e.g. rawTable1:[dedupeSchema.]dedupeTable1,rawTable2:[dedupeSchema.]dedupeTable2,etc. The dedupeTable in mapping will be used for QA scripts. If dedupeSchema is not specified, the deduplicated table will be created in the same schema as the raw table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#auto_qa_dedupe_table_mapping DestinationSnowflake#auto_qa_dedupe_table_mapping}
  */
  readonly autoQaDedupeTableMapping?: { [key: string]: string };
  /**
  * Specifies whether the connector should create the schema automatically. If set to `false`, the schema must be created manually before starting the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#auto_schema_creation DestinationSnowflake#auto_schema_creation}
  */
  readonly autoSchemaCreation?: boolean | cdktf.IResolvable;
  /**
  * Custom SQL mustache template input JSON data. Use TABLE_DATA dictionary to set table specific data. e.g:
  * 	```
  * 	{{`{`}}
  * 	    "TABLE_DATA": {{`{`}}
  * 	        "my-table-name": {{`{`}}
  * 	            "someTableSpecificKey": "someTableSpecificValue"
  * 	        {{`}`}}
  * 	    {{`}`}}
  * 	{{`}`}}
  * 	```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#create_sql_data DestinationSnowflake#create_sql_data}
  */
  readonly createSqlData?: string;
  /**
  * Custom SQL mustache template to be run the first time a record is streamed for each table. Default is: 
  * 	```
  * 	CREATE OR REPLACE DYNAMIC TABLE {{`{`}}{{`{`}}table{{`}`}}{{`}`}}_DT TARGET_LAG='15 minutes' WAREHOUSE={{`{`}}{{`{`}}warehouse{{`}`}}{{`}`}} AS SELECT * EXCLUDE dedupe_id FROM( SELECT *, ROW_NUMBER() OVER (PARTITION BY {{`{`}}{{`{`}}primaryKeyColumns{{`}`}}{{`}`}} ORDER BY _streamkap_ts_ms DESC, _streamkap_offset DESC) AS dedupe_id FROM {{`{`}}{{`{`}}table{{`}`}}{{`}`}} ) WHERE dedupe_id = 1 AND __deleted = 'false';
  * 	CREATE OR REPLACE TASK {{`{`}}{{`{`}}table{{`}`}}{{`}`}}_CT WAREHOUSE={{`{`}}{{`{`}}warehouse{{`}`}}{{`}`}} SCHEDULE='4380 minutes' TASK_AUTO_RETRY_ATTEMPTS=3 ALLOW_OVERLAPPING_EXECUTION=FALSE AS DELETE FROM {{`{`}}{{`{`}}table{{`}`}}{{`}`}} WHERE NOT EXISTS ( SELECT 1 FROM ( SELECT {{`{`}}{{`{`}}primaryKeyColumns{{`}`}}{{`}`}}, MAX(_streamkap_ts_ms) AS max_timestamp FROM {{`{`}}{{`{`}}table{{`}`}}{{`}`}} GROUP BY {{`{`}}{{`{`}}primaryKeyColumns{{`}`}}{{`}`}} ) AS subquery WHERE {{`{`}}{{`{`}}{{`{`}}keyColumnsAndCondition{{`}`}}{{`}`}}{{`}`}} AND {{`{`}}{{`{`}}table{{`}`}}{{`}`}}._streamkap_ts_ms = subquery.max_timestamp);
  * 	ALTER TASK {{`{`}}{{`{`}}table{{`}`}}{{`}`}}_CT RESUME
  * 	```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#create_sql_execute DestinationSnowflake#create_sql_execute}
  */
  readonly createSqlExecute?: string;
  /**
  * Specifies whether the connector processes DELETE or tombstone events and removes the corresponding row from the database (applies to `upsert` only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#hard_delete DestinationSnowflake#hard_delete}
  */
  readonly hardDelete?: boolean | cdktf.IResolvable;
  /**
  * `upsert` or `append` modes are available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#ingestion_mode DestinationSnowflake#ingestion_mode}
  */
  readonly ingestionMode?: string;
  /**
  * Destination name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#name DestinationSnowflake#name}
  */
  readonly name: string;
  /**
  * Controls how schema evolution is handled by the sink connector. For pipelines with pre-created destination tables, set to `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#schema_evolution DestinationSnowflake#schema_evolution}
  */
  readonly schemaEvolution?: string;
  /**
  * The name of the Snowflake warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#sfwarehouse DestinationSnowflake#sfwarehouse}
  */
  readonly sfwarehouse?: string;
  /**
  * The name of the database that contains the table to insert rows into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#snowflake_database_name DestinationSnowflake#snowflake_database_name}
  */
  readonly snowflakeDatabaseName: string;
  /**
  * The private key to authenticate the user. Include only the key, not the header or footer. If the key is split across multiple lines, remove the line breaks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#snowflake_private_key DestinationSnowflake#snowflake_private_key}
  */
  readonly snowflakePrivateKey: string;
  /**
  * If the value is not empty, this phrase is used to try to decrypt the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#snowflake_private_key_passphrase DestinationSnowflake#snowflake_private_key_passphrase}
  */
  readonly snowflakePrivateKeyPassphrase?: string;
  /**
  * The name of an existing role with necessary privileges (for Streamkap) assigned to the Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#snowflake_role_name DestinationSnowflake#snowflake_role_name}
  */
  readonly snowflakeRoleName?: string;
  /**
  * The name of the schema that contains the table to insert rows into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#snowflake_schema_name DestinationSnowflake#snowflake_schema_name}
  */
  readonly snowflakeSchemaName: string;
  /**
  * The URL for accessing your Snowflake account. This URL must include your account identifier. Note that the protocol (https://) and port number are optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#snowflake_url_name DestinationSnowflake#snowflake_url_name}
  */
  readonly snowflakeUrlName: string;
  /**
  * User login name for the Snowflake account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#snowflake_user_name DestinationSnowflake#snowflake_user_name}
  */
  readonly snowflakeUserName: string;
  /**
  * Dynamic Table Name mustache template. Can be used as `{{`{`}}{{`{`}}dynamicTableName{{`}`}}{{`}`}}` in dynamic table creation SQL. It can use input JSON data for more complex mappings and logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#sql_table_name DestinationSnowflake#sql_table_name}
  */
  readonly sqlTableName?: string;
  /**
  * Specifies whether the connector should create Hybrid Tables (applies to `upsert` only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#use_hybrid_tables DestinationSnowflake#use_hybrid_tables}
  */
  readonly useHybridTables?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake streamkap_destination_snowflake}
*/
export class DestinationSnowflake extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_destination_snowflake";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationSnowflake resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationSnowflake to import
  * @param importFromId The id of the existing DestinationSnowflake that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationSnowflake to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_destination_snowflake", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_snowflake streamkap_destination_snowflake} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationSnowflakeConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationSnowflakeConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_destination_snowflake',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyDynamicTableScript = config.applyDynamicTableScript;
    this._autoQaDedupeTableMapping = config.autoQaDedupeTableMapping;
    this._autoSchemaCreation = config.autoSchemaCreation;
    this._createSqlData = config.createSqlData;
    this._createSqlExecute = config.createSqlExecute;
    this._hardDelete = config.hardDelete;
    this._ingestionMode = config.ingestionMode;
    this._name = config.name;
    this._schemaEvolution = config.schemaEvolution;
    this._sfwarehouse = config.sfwarehouse;
    this._snowflakeDatabaseName = config.snowflakeDatabaseName;
    this._snowflakePrivateKey = config.snowflakePrivateKey;
    this._snowflakePrivateKeyPassphrase = config.snowflakePrivateKeyPassphrase;
    this._snowflakeRoleName = config.snowflakeRoleName;
    this._snowflakeSchemaName = config.snowflakeSchemaName;
    this._snowflakeUrlName = config.snowflakeUrlName;
    this._snowflakeUserName = config.snowflakeUserName;
    this._sqlTableName = config.sqlTableName;
    this._useHybridTables = config.useHybridTables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_dynamic_table_script - computed: true, optional: true, required: false
  private _applyDynamicTableScript?: boolean | cdktf.IResolvable; 
  public get applyDynamicTableScript() {
    return this.getBooleanAttribute('apply_dynamic_table_script');
  }
  public set applyDynamicTableScript(value: boolean | cdktf.IResolvable) {
    this._applyDynamicTableScript = value;
  }
  public resetApplyDynamicTableScript() {
    this._applyDynamicTableScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyDynamicTableScriptInput() {
    return this._applyDynamicTableScript;
  }

  // auto_qa_dedupe_table_mapping - computed: false, optional: true, required: false
  private _autoQaDedupeTableMapping?: { [key: string]: string }; 
  public get autoQaDedupeTableMapping() {
    return this.getStringMapAttribute('auto_qa_dedupe_table_mapping');
  }
  public set autoQaDedupeTableMapping(value: { [key: string]: string }) {
    this._autoQaDedupeTableMapping = value;
  }
  public resetAutoQaDedupeTableMapping() {
    this._autoQaDedupeTableMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoQaDedupeTableMappingInput() {
    return this._autoQaDedupeTableMapping;
  }

  // auto_schema_creation - computed: true, optional: true, required: false
  private _autoSchemaCreation?: boolean | cdktf.IResolvable; 
  public get autoSchemaCreation() {
    return this.getBooleanAttribute('auto_schema_creation');
  }
  public set autoSchemaCreation(value: boolean | cdktf.IResolvable) {
    this._autoSchemaCreation = value;
  }
  public resetAutoSchemaCreation() {
    this._autoSchemaCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSchemaCreationInput() {
    return this._autoSchemaCreation;
  }

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // create_sql_data - computed: false, optional: true, required: false
  private _createSqlData?: string; 
  public get createSqlData() {
    return this.getStringAttribute('create_sql_data');
  }
  public set createSqlData(value: string) {
    this._createSqlData = value;
  }
  public resetCreateSqlData() {
    this._createSqlData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSqlDataInput() {
    return this._createSqlData;
  }

  // create_sql_execute - computed: true, optional: true, required: false
  private _createSqlExecute?: string; 
  public get createSqlExecute() {
    return this.getStringAttribute('create_sql_execute');
  }
  public set createSqlExecute(value: string) {
    this._createSqlExecute = value;
  }
  public resetCreateSqlExecute() {
    this._createSqlExecute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSqlExecuteInput() {
    return this._createSqlExecute;
  }

  // hard_delete - computed: true, optional: true, required: false
  private _hardDelete?: boolean | cdktf.IResolvable; 
  public get hardDelete() {
    return this.getBooleanAttribute('hard_delete');
  }
  public set hardDelete(value: boolean | cdktf.IResolvable) {
    this._hardDelete = value;
  }
  public resetHardDelete() {
    this._hardDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardDeleteInput() {
    return this._hardDelete;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingestion_mode - computed: true, optional: true, required: false
  private _ingestionMode?: string; 
  public get ingestionMode() {
    return this.getStringAttribute('ingestion_mode');
  }
  public set ingestionMode(value: string) {
    this._ingestionMode = value;
  }
  public resetIngestionMode() {
    this._ingestionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionModeInput() {
    return this._ingestionMode;
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

  // schema_evolution - computed: true, optional: true, required: false
  private _schemaEvolution?: string; 
  public get schemaEvolution() {
    return this.getStringAttribute('schema_evolution');
  }
  public set schemaEvolution(value: string) {
    this._schemaEvolution = value;
  }
  public resetSchemaEvolution() {
    this._schemaEvolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaEvolutionInput() {
    return this._schemaEvolution;
  }

  // sfwarehouse - computed: true, optional: true, required: false
  private _sfwarehouse?: string; 
  public get sfwarehouse() {
    return this.getStringAttribute('sfwarehouse');
  }
  public set sfwarehouse(value: string) {
    this._sfwarehouse = value;
  }
  public resetSfwarehouse() {
    this._sfwarehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfwarehouseInput() {
    return this._sfwarehouse;
  }

  // snowflake_database_name - computed: false, optional: false, required: true
  private _snowflakeDatabaseName?: string; 
  public get snowflakeDatabaseName() {
    return this.getStringAttribute('snowflake_database_name');
  }
  public set snowflakeDatabaseName(value: string) {
    this._snowflakeDatabaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeDatabaseNameInput() {
    return this._snowflakeDatabaseName;
  }

  // snowflake_private_key - computed: false, optional: false, required: true
  private _snowflakePrivateKey?: string; 
  public get snowflakePrivateKey() {
    return this.getStringAttribute('snowflake_private_key');
  }
  public set snowflakePrivateKey(value: string) {
    this._snowflakePrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakePrivateKeyInput() {
    return this._snowflakePrivateKey;
  }

  // snowflake_private_key_passphrase - computed: false, optional: true, required: false
  private _snowflakePrivateKeyPassphrase?: string; 
  public get snowflakePrivateKeyPassphrase() {
    return this.getStringAttribute('snowflake_private_key_passphrase');
  }
  public set snowflakePrivateKeyPassphrase(value: string) {
    this._snowflakePrivateKeyPassphrase = value;
  }
  public resetSnowflakePrivateKeyPassphrase() {
    this._snowflakePrivateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakePrivateKeyPassphraseInput() {
    return this._snowflakePrivateKeyPassphrase;
  }

  // snowflake_role_name - computed: true, optional: true, required: false
  private _snowflakeRoleName?: string; 
  public get snowflakeRoleName() {
    return this.getStringAttribute('snowflake_role_name');
  }
  public set snowflakeRoleName(value: string) {
    this._snowflakeRoleName = value;
  }
  public resetSnowflakeRoleName() {
    this._snowflakeRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeRoleNameInput() {
    return this._snowflakeRoleName;
  }

  // snowflake_schema_name - computed: false, optional: false, required: true
  private _snowflakeSchemaName?: string; 
  public get snowflakeSchemaName() {
    return this.getStringAttribute('snowflake_schema_name');
  }
  public set snowflakeSchemaName(value: string) {
    this._snowflakeSchemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeSchemaNameInput() {
    return this._snowflakeSchemaName;
  }

  // snowflake_url_name - computed: false, optional: false, required: true
  private _snowflakeUrlName?: string; 
  public get snowflakeUrlName() {
    return this.getStringAttribute('snowflake_url_name');
  }
  public set snowflakeUrlName(value: string) {
    this._snowflakeUrlName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeUrlNameInput() {
    return this._snowflakeUrlName;
  }

  // snowflake_user_name - computed: false, optional: false, required: true
  private _snowflakeUserName?: string; 
  public get snowflakeUserName() {
    return this.getStringAttribute('snowflake_user_name');
  }
  public set snowflakeUserName(value: string) {
    this._snowflakeUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeUserNameInput() {
    return this._snowflakeUserName;
  }

  // sql_table_name - computed: true, optional: true, required: false
  private _sqlTableName?: string; 
  public get sqlTableName() {
    return this.getStringAttribute('sql_table_name');
  }
  public set sqlTableName(value: string) {
    this._sqlTableName = value;
  }
  public resetSqlTableName() {
    this._sqlTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTableNameInput() {
    return this._sqlTableName;
  }

  // use_hybrid_tables - computed: true, optional: true, required: false
  private _useHybridTables?: boolean | cdktf.IResolvable; 
  public get useHybridTables() {
    return this.getBooleanAttribute('use_hybrid_tables');
  }
  public set useHybridTables(value: boolean | cdktf.IResolvable) {
    this._useHybridTables = value;
  }
  public resetUseHybridTables() {
    this._useHybridTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHybridTablesInput() {
    return this._useHybridTables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_dynamic_table_script: cdktf.booleanToTerraform(this._applyDynamicTableScript),
      auto_qa_dedupe_table_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._autoQaDedupeTableMapping),
      auto_schema_creation: cdktf.booleanToTerraform(this._autoSchemaCreation),
      create_sql_data: cdktf.stringToTerraform(this._createSqlData),
      create_sql_execute: cdktf.stringToTerraform(this._createSqlExecute),
      hard_delete: cdktf.booleanToTerraform(this._hardDelete),
      ingestion_mode: cdktf.stringToTerraform(this._ingestionMode),
      name: cdktf.stringToTerraform(this._name),
      schema_evolution: cdktf.stringToTerraform(this._schemaEvolution),
      sfwarehouse: cdktf.stringToTerraform(this._sfwarehouse),
      snowflake_database_name: cdktf.stringToTerraform(this._snowflakeDatabaseName),
      snowflake_private_key: cdktf.stringToTerraform(this._snowflakePrivateKey),
      snowflake_private_key_passphrase: cdktf.stringToTerraform(this._snowflakePrivateKeyPassphrase),
      snowflake_role_name: cdktf.stringToTerraform(this._snowflakeRoleName),
      snowflake_schema_name: cdktf.stringToTerraform(this._snowflakeSchemaName),
      snowflake_url_name: cdktf.stringToTerraform(this._snowflakeUrlName),
      snowflake_user_name: cdktf.stringToTerraform(this._snowflakeUserName),
      sql_table_name: cdktf.stringToTerraform(this._sqlTableName),
      use_hybrid_tables: cdktf.booleanToTerraform(this._useHybridTables),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_dynamic_table_script: {
        value: cdktf.booleanToHclTerraform(this._applyDynamicTableScript),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_qa_dedupe_table_mapping: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._autoQaDedupeTableMapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auto_schema_creation: {
        value: cdktf.booleanToHclTerraform(this._autoSchemaCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_sql_data: {
        value: cdktf.stringToHclTerraform(this._createSqlData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_sql_execute: {
        value: cdktf.stringToHclTerraform(this._createSqlExecute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hard_delete: {
        value: cdktf.booleanToHclTerraform(this._hardDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ingestion_mode: {
        value: cdktf.stringToHclTerraform(this._ingestionMode),
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
      schema_evolution: {
        value: cdktf.stringToHclTerraform(this._schemaEvolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sfwarehouse: {
        value: cdktf.stringToHclTerraform(this._sfwarehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowflake_database_name: {
        value: cdktf.stringToHclTerraform(this._snowflakeDatabaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowflake_private_key: {
        value: cdktf.stringToHclTerraform(this._snowflakePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowflake_private_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._snowflakePrivateKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowflake_role_name: {
        value: cdktf.stringToHclTerraform(this._snowflakeRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowflake_schema_name: {
        value: cdktf.stringToHclTerraform(this._snowflakeSchemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowflake_url_name: {
        value: cdktf.stringToHclTerraform(this._snowflakeUrlName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowflake_user_name: {
        value: cdktf.stringToHclTerraform(this._snowflakeUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_table_name: {
        value: cdktf.stringToHclTerraform(this._sqlTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_hybrid_tables: {
        value: cdktf.booleanToHclTerraform(this._useHybridTables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
