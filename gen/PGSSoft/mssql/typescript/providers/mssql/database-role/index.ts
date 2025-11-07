// https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/database_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of database. Can be retrieved using `mssql_database` or `SELECT DB_ID('<db_name>')`. Defaults to ID of `master`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/database_role#database_id DatabaseRole#database_id}
  */
  readonly databaseId?: string;
  /**
  * Role name. Must follow [Regular Identifiers rules](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-identifiers#rules-for-regular-identifiers) and cannot be longer than 128 chars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/database_role#name DatabaseRole#name}
  */
  readonly name: string;
  /**
  * ID of another database role or user owning this role. Can be retrieved using `mssql_database_role` or `mssql_sql_user`. Defaults to ID of current user, used to authorize the Terraform provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/database_role#owner_id DatabaseRole#owner_id}
  */
  readonly ownerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/database_role mssql_database_role}
*/
export class DatabaseRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mssql_database_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseRole to import
  * @param importFromId The id of the existing DatabaseRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/database_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mssql_database_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/database_role mssql_database_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'mssql_database_role',
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
    this._ownerId = config.ownerId;
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

  // owner_id - computed: true, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.stringToTerraform(this._databaseId),
      name: cdktf.stringToTerraform(this._name),
      owner_id: cdktf.stringToTerraform(this._ownerId),
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
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
