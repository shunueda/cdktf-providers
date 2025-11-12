// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_binary_log_information
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_binary_log_information#id DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_binary_log_information#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformation#managed_my_sql_database_id}
  */
  readonly managedMySqlDatabaseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_binary_log_information oci_database_management_managed_my_sql_database_binary_log_information}
*/
export class DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_my_sql_database_binary_log_information";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformation to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_binary_log_information#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_my_sql_database_binary_log_information", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_binary_log_information oci_database_management_managed_my_sql_database_binary_log_information} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedMySqlDatabaseBinaryLogInformationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_my_sql_database_binary_log_information',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._managedMySqlDatabaseId = config.managedMySqlDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_log_compression - computed: true, optional: false, required: false
  public get binaryLogCompression() {
    return this.getStringAttribute('binary_log_compression');
  }

  // binary_log_compression_percent - computed: true, optional: false, required: false
  public get binaryLogCompressionPercent() {
    return this.getNumberAttribute('binary_log_compression_percent');
  }

  // binary_log_format - computed: true, optional: false, required: false
  public get binaryLogFormat() {
    return this.getStringAttribute('binary_log_format');
  }

  // binary_log_name - computed: true, optional: false, required: false
  public get binaryLogName() {
    return this.getStringAttribute('binary_log_name');
  }

  // binary_log_position - computed: true, optional: false, required: false
  public get binaryLogPosition() {
    return this.getStringAttribute('binary_log_position');
  }

  // binary_logging - computed: true, optional: false, required: false
  public get binaryLogging() {
    return this.getStringAttribute('binary_logging');
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

  // managed_my_sql_database_id - computed: false, optional: false, required: true
  private _managedMySqlDatabaseId?: string; 
  public get managedMySqlDatabaseId() {
    return this.getStringAttribute('managed_my_sql_database_id');
  }
  public set managedMySqlDatabaseId(value: string) {
    this._managedMySqlDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMySqlDatabaseIdInput() {
    return this._managedMySqlDatabaseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_my_sql_database_id: cdktf.stringToTerraform(this._managedMySqlDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_my_sql_database_id: {
        value: cdktf.stringToHclTerraform(this._managedMySqlDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
