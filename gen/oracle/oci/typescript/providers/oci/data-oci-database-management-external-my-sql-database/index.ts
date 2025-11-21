// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_external_my_sql_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExternalMySqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_external_my_sql_database#external_my_sql_database_id DataOciDatabaseManagementExternalMySqlDatabase#external_my_sql_database_id}
  */
  readonly externalMySqlDatabaseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_external_my_sql_database oci_database_management_external_my_sql_database}
*/
export class DataOciDatabaseManagementExternalMySqlDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_my_sql_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementExternalMySqlDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementExternalMySqlDatabase to import
  * @param importFromId The id of the existing DataOciDatabaseManagementExternalMySqlDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_external_my_sql_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementExternalMySqlDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_my_sql_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/database_management_external_my_sql_database oci_database_management_external_my_sql_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExternalMySqlDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExternalMySqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_my_sql_database',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalMySqlDatabaseId = config.externalMySqlDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // external_database_id - computed: true, optional: false, required: false
  public get externalDatabaseId() {
    return this.getStringAttribute('external_database_id');
  }

  // external_my_sql_database_id - computed: false, optional: false, required: true
  private _externalMySqlDatabaseId?: string; 
  public get externalMySqlDatabaseId() {
    return this.getStringAttribute('external_my_sql_database_id');
  }
  public set externalMySqlDatabaseId(value: string) {
    this._externalMySqlDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalMySqlDatabaseIdInput() {
    return this._externalMySqlDatabaseId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_my_sql_database_id: cdktf.stringToTerraform(this._externalMySqlDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_my_sql_database_id: {
        value: cdktf.stringToHclTerraform(this._externalMySqlDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
