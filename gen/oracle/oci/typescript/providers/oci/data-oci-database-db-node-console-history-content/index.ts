// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_db_node_console_history_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseDbNodeConsoleHistoryContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_db_node_console_history_content#console_history_id DataOciDatabaseDbNodeConsoleHistoryContent#console_history_id}
  */
  readonly consoleHistoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_db_node_console_history_content#db_node_id DataOciDatabaseDbNodeConsoleHistoryContent#db_node_id}
  */
  readonly dbNodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_db_node_console_history_content#id DataOciDatabaseDbNodeConsoleHistoryContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_db_node_console_history_content oci_database_db_node_console_history_content}
*/
export class DataOciDatabaseDbNodeConsoleHistoryContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_db_node_console_history_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistoryContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseDbNodeConsoleHistoryContent to import
  * @param importFromId The id of the existing DataOciDatabaseDbNodeConsoleHistoryContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_db_node_console_history_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseDbNodeConsoleHistoryContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_db_node_console_history_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_db_node_console_history_content oci_database_db_node_console_history_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseDbNodeConsoleHistoryContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbNodeConsoleHistoryContentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_node_console_history_content',
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
    this._consoleHistoryId = config.consoleHistoryId;
    this._dbNodeId = config.dbNodeId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // console_history_id - computed: false, optional: false, required: true
  private _consoleHistoryId?: string; 
  public get consoleHistoryId() {
    return this.getStringAttribute('console_history_id');
  }
  public set consoleHistoryId(value: string) {
    this._consoleHistoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleHistoryIdInput() {
    return this._consoleHistoryId;
  }

  // db_node_id - computed: false, optional: false, required: true
  private _dbNodeId?: string; 
  public get dbNodeId() {
    return this.getStringAttribute('db_node_id');
  }
  public set dbNodeId(value: string) {
    this._dbNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeIdInput() {
    return this._dbNodeId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      console_history_id: cdktf.stringToTerraform(this._consoleHistoryId),
      db_node_id: cdktf.stringToTerraform(this._dbNodeId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      console_history_id: {
        value: cdktf.stringToHclTerraform(this._consoleHistoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_node_id: {
        value: cdktf.stringToHclTerraform(this._dbNodeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
