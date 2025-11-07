// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodDatabaseAConfig extends cdktf.TerraformMetaArguments {
  /**
  * DATABASE type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#database HealthMonitorMethodDatabaseA#database}
  */
  readonly database?: number;
  /**
  * 'mssql': Specify MSSQL database; 'mysql': Specify MySQL database; 'oracle': Specify Oracle database; 'postgresql': Specify PostgreSQL database;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#database_name HealthMonitorMethodDatabaseA#database_name}
  */
  readonly databaseName?: string;
  /**
  * Specify the column number for receiving
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_column HealthMonitorMethodDatabaseA#db_column}
  */
  readonly dbColumn?: number;
  /**
  * Specify the column number for receiving
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_column_integer HealthMonitorMethodDatabaseA#db_column_integer}
  */
  readonly dbColumnInteger?: number;
  /**
  * Specify the database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_name HealthMonitorMethodDatabaseA#db_name}
  */
  readonly dbName?: string;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_password HealthMonitorMethodDatabaseA#db_password}
  */
  readonly dbPassword?: number;
  /**
  * Configure password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_password_str HealthMonitorMethodDatabaseA#db_password_str}
  */
  readonly dbPasswordStr?: string;
  /**
  * Specify the response string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_receive HealthMonitorMethodDatabaseA#db_receive}
  */
  readonly dbReceive?: string;
  /**
  * Specify the response integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_receive_integer HealthMonitorMethodDatabaseA#db_receive_integer}
  */
  readonly dbReceiveInteger?: number;
  /**
  * Specify the row number for receiving
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_row HealthMonitorMethodDatabaseA#db_row}
  */
  readonly dbRow?: number;
  /**
  * Specify the row number for receiving
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_row_integer HealthMonitorMethodDatabaseA#db_row_integer}
  */
  readonly dbRowInteger?: number;
  /**
  * Specify the SQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_send HealthMonitorMethodDatabaseA#db_send}
  */
  readonly dbSend?: string;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#db_username HealthMonitorMethodDatabaseA#db_username}
  */
  readonly dbUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#id HealthMonitorMethodDatabaseA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#name HealthMonitorMethodDatabaseA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#uuid HealthMonitorMethodDatabaseA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database thunder_health_monitor_method_database}
*/
export class HealthMonitorMethodDatabaseA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodDatabaseA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodDatabaseA to import
  * @param importFromId The id of the existing HealthMonitorMethodDatabaseA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodDatabaseA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_database thunder_health_monitor_method_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodDatabaseAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodDatabaseAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_database',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._database = config.database;
    this._databaseName = config.databaseName;
    this._dbColumn = config.dbColumn;
    this._dbColumnInteger = config.dbColumnInteger;
    this._dbName = config.dbName;
    this._dbPassword = config.dbPassword;
    this._dbPasswordStr = config.dbPasswordStr;
    this._dbReceive = config.dbReceive;
    this._dbReceiveInteger = config.dbReceiveInteger;
    this._dbRow = config.dbRow;
    this._dbRowInteger = config.dbRowInteger;
    this._dbSend = config.dbSend;
    this._dbUsername = config.dbUsername;
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: true, required: false
  private _database?: number; 
  public get database() {
    return this.getNumberAttribute('database');
  }
  public set database(value: number) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // db_column - computed: false, optional: true, required: false
  private _dbColumn?: number; 
  public get dbColumn() {
    return this.getNumberAttribute('db_column');
  }
  public set dbColumn(value: number) {
    this._dbColumn = value;
  }
  public resetDbColumn() {
    this._dbColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbColumnInput() {
    return this._dbColumn;
  }

  // db_column_integer - computed: false, optional: true, required: false
  private _dbColumnInteger?: number; 
  public get dbColumnInteger() {
    return this.getNumberAttribute('db_column_integer');
  }
  public set dbColumnInteger(value: number) {
    this._dbColumnInteger = value;
  }
  public resetDbColumnInteger() {
    this._dbColumnInteger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbColumnIntegerInput() {
    return this._dbColumnInteger;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_password - computed: false, optional: true, required: false
  private _dbPassword?: number; 
  public get dbPassword() {
    return this.getNumberAttribute('db_password');
  }
  public set dbPassword(value: number) {
    this._dbPassword = value;
  }
  public resetDbPassword() {
    this._dbPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPasswordInput() {
    return this._dbPassword;
  }

  // db_password_str - computed: false, optional: true, required: false
  private _dbPasswordStr?: string; 
  public get dbPasswordStr() {
    return this.getStringAttribute('db_password_str');
  }
  public set dbPasswordStr(value: string) {
    this._dbPasswordStr = value;
  }
  public resetDbPasswordStr() {
    this._dbPasswordStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPasswordStrInput() {
    return this._dbPasswordStr;
  }

  // db_receive - computed: false, optional: true, required: false
  private _dbReceive?: string; 
  public get dbReceive() {
    return this.getStringAttribute('db_receive');
  }
  public set dbReceive(value: string) {
    this._dbReceive = value;
  }
  public resetDbReceive() {
    this._dbReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbReceiveInput() {
    return this._dbReceive;
  }

  // db_receive_integer - computed: false, optional: true, required: false
  private _dbReceiveInteger?: number; 
  public get dbReceiveInteger() {
    return this.getNumberAttribute('db_receive_integer');
  }
  public set dbReceiveInteger(value: number) {
    this._dbReceiveInteger = value;
  }
  public resetDbReceiveInteger() {
    this._dbReceiveInteger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbReceiveIntegerInput() {
    return this._dbReceiveInteger;
  }

  // db_row - computed: false, optional: true, required: false
  private _dbRow?: number; 
  public get dbRow() {
    return this.getNumberAttribute('db_row');
  }
  public set dbRow(value: number) {
    this._dbRow = value;
  }
  public resetDbRow() {
    this._dbRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbRowInput() {
    return this._dbRow;
  }

  // db_row_integer - computed: false, optional: true, required: false
  private _dbRowInteger?: number; 
  public get dbRowInteger() {
    return this.getNumberAttribute('db_row_integer');
  }
  public set dbRowInteger(value: number) {
    this._dbRowInteger = value;
  }
  public resetDbRowInteger() {
    this._dbRowInteger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbRowIntegerInput() {
    return this._dbRowInteger;
  }

  // db_send - computed: false, optional: true, required: false
  private _dbSend?: string; 
  public get dbSend() {
    return this.getStringAttribute('db_send');
  }
  public set dbSend(value: string) {
    this._dbSend = value;
  }
  public resetDbSend() {
    this._dbSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSendInput() {
    return this._dbSend;
  }

  // db_username - computed: false, optional: true, required: false
  private _dbUsername?: string; 
  public get dbUsername() {
    return this.getStringAttribute('db_username');
  }
  public set dbUsername(value: string) {
    this._dbUsername = value;
  }
  public resetDbUsername() {
    this._dbUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUsernameInput() {
    return this._dbUsername;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.numberToTerraform(this._database),
      database_name: cdktf.stringToTerraform(this._databaseName),
      db_column: cdktf.numberToTerraform(this._dbColumn),
      db_column_integer: cdktf.numberToTerraform(this._dbColumnInteger),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_password: cdktf.numberToTerraform(this._dbPassword),
      db_password_str: cdktf.stringToTerraform(this._dbPasswordStr),
      db_receive: cdktf.stringToTerraform(this._dbReceive),
      db_receive_integer: cdktf.numberToTerraform(this._dbReceiveInteger),
      db_row: cdktf.numberToTerraform(this._dbRow),
      db_row_integer: cdktf.numberToTerraform(this._dbRowInteger),
      db_send: cdktf.stringToTerraform(this._dbSend),
      db_username: cdktf.stringToTerraform(this._dbUsername),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktf.numberToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_column: {
        value: cdktf.numberToHclTerraform(this._dbColumn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_column_integer: {
        value: cdktf.numberToHclTerraform(this._dbColumnInteger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_password: {
        value: cdktf.numberToHclTerraform(this._dbPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_password_str: {
        value: cdktf.stringToHclTerraform(this._dbPasswordStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_receive: {
        value: cdktf.stringToHclTerraform(this._dbReceive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_receive_integer: {
        value: cdktf.numberToHclTerraform(this._dbReceiveInteger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_row: {
        value: cdktf.numberToHclTerraform(this._dbRow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_row_integer: {
        value: cdktf.numberToHclTerraform(this._dbRowInteger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_send: {
        value: cdktf.stringToHclTerraform(this._dbSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_username: {
        value: cdktf.stringToHclTerraform(this._dbUsername),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
