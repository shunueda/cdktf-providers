// https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMssqlSqlLoginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Login name. Must follow [Regular Identifiers rules](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-identifiers#rules-for-regular-identifiers) and cannot contain `\ `
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_login#name DataMssqlSqlLogin#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_login mssql_sql_login}
*/
export class DataMssqlSqlLogin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mssql_sql_login";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMssqlSqlLogin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMssqlSqlLogin to import
  * @param importFromId The id of the existing DataMssqlSqlLogin that should be imported. Refer to the {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_login#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMssqlSqlLogin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mssql_sql_login", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/data-sources/sql_login mssql_sql_login} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMssqlSqlLoginConfig
  */
  public constructor(scope: Construct, id: string, config: DataMssqlSqlLoginConfig) {
    super(scope, id, {
      terraformResourceType: 'mssql_sql_login',
      terraformGeneratorMetadata: {
        providerName: 'mssql',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_password_expiration - computed: true, optional: false, required: false
  public get checkPasswordExpiration() {
    return this.getBooleanAttribute('check_password_expiration');
  }

  // check_password_policy - computed: true, optional: false, required: false
  public get checkPasswordPolicy() {
    return this.getBooleanAttribute('check_password_policy');
  }

  // default_database_id - computed: true, optional: false, required: false
  public get defaultDatabaseId() {
    return this.getStringAttribute('default_database_id');
  }

  // default_language - computed: true, optional: false, required: false
  public get defaultLanguage() {
    return this.getStringAttribute('default_language');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // must_change_password - computed: true, optional: false, required: false
  public get mustChangePassword() {
    return this.getBooleanAttribute('must_change_password');
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

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
