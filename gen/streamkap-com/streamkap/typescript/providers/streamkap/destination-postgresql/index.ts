// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationPostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Either the name of the primary key column or a comma-separated list of fields to derive the primary key from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#custom_primary_key DestinationPostgresql#custom_primary_key}
  */
  readonly customPrimaryKey?: string;
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#database_dbname DestinationPostgresql#database_dbname}
  */
  readonly databaseDbname: string;
  /**
  * PostgreSQL Hostname. For example, postgres.something.rds.amazonaws.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#database_hostname DestinationPostgresql#database_hostname}
  */
  readonly databaseHostname: string;
  /**
  * Password to access Postgresql
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#database_password DestinationPostgresql#database_password}
  */
  readonly databasePassword: string;
  /**
  * PostgreSQL Port. For example, 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#database_port DestinationPostgresql#database_port}
  */
  readonly databasePort?: number;
  /**
  * Schema for the associated table name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#database_schema_name DestinationPostgresql#database_schema_name}
  */
  readonly databaseSchemaName: string;
  /**
  * Username to access Postgresql
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#database_username DestinationPostgresql#database_username}
  */
  readonly databaseUsername: string;
  /**
  * Specifies whether the connector processes DELETE or tombstone events and removes the corresponding row from the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#hard_delete DestinationPostgresql#hard_delete}
  */
  readonly hardDelete?: boolean | cdktf.IResolvable;
  /**
  * Insert or upsert modes are available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#insert_mode DestinationPostgresql#insert_mode}
  */
  readonly insertMode?: string;
  /**
  * Destination name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#name DestinationPostgresql#name}
  */
  readonly name: string;
  /**
  * Specifies how the connector resolves the primary key columns from the event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#primary_key_mode DestinationPostgresql#primary_key_mode}
  */
  readonly primaryKeyMode?: string;
  /**
  * Controls how schema evolution is handled by the sink connector. For pipelines with pre-created destination tables, set to `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#schema_evolution DestinationPostgresql#schema_evolution}
  */
  readonly schemaEvolution?: string;
  /**
  * Connect via SSH tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#ssh_enabled DestinationPostgresql#ssh_enabled}
  */
  readonly sshEnabled?: boolean | cdktf.IResolvable;
  /**
  * Hostname of the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#ssh_host DestinationPostgresql#ssh_host}
  */
  readonly sshHost?: string;
  /**
  * Port of the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#ssh_port DestinationPostgresql#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * User for connecting to the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#ssh_user DestinationPostgresql#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * The maximum number of active task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#tasks_max DestinationPostgresql#tasks_max}
  */
  readonly tasksMax?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql streamkap_destination_postgresql}
*/
export class DestinationPostgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_destination_postgresql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationPostgresql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationPostgresql to import
  * @param importFromId The id of the existing DestinationPostgresql that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationPostgresql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_destination_postgresql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/destination_postgresql streamkap_destination_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationPostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationPostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_destination_postgresql',
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
    this._customPrimaryKey = config.customPrimaryKey;
    this._databaseDbname = config.databaseDbname;
    this._databaseHostname = config.databaseHostname;
    this._databasePassword = config.databasePassword;
    this._databasePort = config.databasePort;
    this._databaseSchemaName = config.databaseSchemaName;
    this._databaseUsername = config.databaseUsername;
    this._hardDelete = config.hardDelete;
    this._insertMode = config.insertMode;
    this._name = config.name;
    this._primaryKeyMode = config.primaryKeyMode;
    this._schemaEvolution = config.schemaEvolution;
    this._sshEnabled = config.sshEnabled;
    this._sshHost = config.sshHost;
    this._sshPort = config.sshPort;
    this._sshUser = config.sshUser;
    this._tasksMax = config.tasksMax;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // custom_primary_key - computed: false, optional: true, required: false
  private _customPrimaryKey?: string; 
  public get customPrimaryKey() {
    return this.getStringAttribute('custom_primary_key');
  }
  public set customPrimaryKey(value: string) {
    this._customPrimaryKey = value;
  }
  public resetCustomPrimaryKey() {
    this._customPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPrimaryKeyInput() {
    return this._customPrimaryKey;
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

  // database_schema_name - computed: false, optional: false, required: true
  private _databaseSchemaName?: string; 
  public get databaseSchemaName() {
    return this.getStringAttribute('database_schema_name');
  }
  public set databaseSchemaName(value: string) {
    this._databaseSchemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSchemaNameInput() {
    return this._databaseSchemaName;
  }

  // database_username - computed: false, optional: false, required: true
  private _databaseUsername?: string; 
  public get databaseUsername() {
    return this.getStringAttribute('database_username');
  }
  public set databaseUsername(value: string) {
    this._databaseUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUsernameInput() {
    return this._databaseUsername;
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

  // insert_mode - computed: true, optional: true, required: false
  private _insertMode?: string; 
  public get insertMode() {
    return this.getStringAttribute('insert_mode');
  }
  public set insertMode(value: string) {
    this._insertMode = value;
  }
  public resetInsertMode() {
    this._insertMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertModeInput() {
    return this._insertMode;
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

  // primary_key_mode - computed: true, optional: true, required: false
  private _primaryKeyMode?: string; 
  public get primaryKeyMode() {
    return this.getStringAttribute('primary_key_mode');
  }
  public set primaryKeyMode(value: string) {
    this._primaryKeyMode = value;
  }
  public resetPrimaryKeyMode() {
    this._primaryKeyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyModeInput() {
    return this._primaryKeyMode;
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

  // tasks_max - computed: true, optional: true, required: false
  private _tasksMax?: number; 
  public get tasksMax() {
    return this.getNumberAttribute('tasks_max');
  }
  public set tasksMax(value: number) {
    this._tasksMax = value;
  }
  public resetTasksMax() {
    this._tasksMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksMaxInput() {
    return this._tasksMax;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_primary_key: cdktf.stringToTerraform(this._customPrimaryKey),
      database_dbname: cdktf.stringToTerraform(this._databaseDbname),
      database_hostname: cdktf.stringToTerraform(this._databaseHostname),
      database_password: cdktf.stringToTerraform(this._databasePassword),
      database_port: cdktf.numberToTerraform(this._databasePort),
      database_schema_name: cdktf.stringToTerraform(this._databaseSchemaName),
      database_username: cdktf.stringToTerraform(this._databaseUsername),
      hard_delete: cdktf.booleanToTerraform(this._hardDelete),
      insert_mode: cdktf.stringToTerraform(this._insertMode),
      name: cdktf.stringToTerraform(this._name),
      primary_key_mode: cdktf.stringToTerraform(this._primaryKeyMode),
      schema_evolution: cdktf.stringToTerraform(this._schemaEvolution),
      ssh_enabled: cdktf.booleanToTerraform(this._sshEnabled),
      ssh_host: cdktf.stringToTerraform(this._sshHost),
      ssh_port: cdktf.stringToTerraform(this._sshPort),
      ssh_user: cdktf.stringToTerraform(this._sshUser),
      tasks_max: cdktf.numberToTerraform(this._tasksMax),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_primary_key: {
        value: cdktf.stringToHclTerraform(this._customPrimaryKey),
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
      database_schema_name: {
        value: cdktf.stringToHclTerraform(this._databaseSchemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_username: {
        value: cdktf.stringToHclTerraform(this._databaseUsername),
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
      insert_mode: {
        value: cdktf.stringToHclTerraform(this._insertMode),
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
      primary_key_mode: {
        value: cdktf.stringToHclTerraform(this._primaryKeyMode),
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
      tasks_max: {
        value: cdktf.numberToHclTerraform(this._tasksMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
