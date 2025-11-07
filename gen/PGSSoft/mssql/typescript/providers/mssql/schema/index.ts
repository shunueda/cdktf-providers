// https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of database. Can be retrieved using `mssql_database` or `SELECT DB_ID('<db_name>')`. Defaults to ID of `master`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/schema#database_id Schema#database_id}
  */
  readonly databaseId?: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/schema#name Schema#name}
  */
  readonly name: string;
  /**
  * ID of database role or user owning this schema. Can be retrieved using `mssql_database_role`, `mssql_sql_user`, `mssql_azuread_user` or `mssql_azuread_service_principal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/schema#owner_id Schema#owner_id}
  */
  readonly ownerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/schema mssql_schema}
*/
export class Schema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mssql_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Schema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schema to import
  * @param importFromId The id of the existing Schema that should be imported. Refer to the {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mssql_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pgssoft/mssql/0.6.0/docs/resources/schema mssql_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'mssql_schema',
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
