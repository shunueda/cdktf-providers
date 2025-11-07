// https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMssqlSqlUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of database. Can be retrieved using `mssql_database` or `SELECT DB_ID('<db_name>')`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_user#database_id DataMssqlSqlUser#database_id}
  */
  readonly databaseId?: string;
  /**
  * User name. Cannot be longer than 128 chars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_user#name DataMssqlSqlUser#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_user mssql_sql_user}
*/
export class DataMssqlSqlUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mssql_sql_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMssqlSqlUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMssqlSqlUser to import
  * @param importFromId The id of the existing DataMssqlSqlUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMssqlSqlUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mssql_sql_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_user mssql_sql_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMssqlSqlUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataMssqlSqlUserConfig) {
    super(scope, id, {
      terraformResourceType: 'mssql_sql_user',
      terraformGeneratorMetadata: {
        providerName: 'mssql',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_id - computed: true, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_id - computed: true, optional: false, required: false
  public get loginId() {
    return this.getStringAttribute('login_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.stringToTerraform(this._databaseId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
