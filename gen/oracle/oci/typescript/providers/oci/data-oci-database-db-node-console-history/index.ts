// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_db_node_console_history
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseDbNodeConsoleHistoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_db_node_console_history#console_history_id DataOciDatabaseDbNodeConsoleHistory#console_history_id}
  */
  readonly consoleHistoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_db_node_console_history#db_node_id DataOciDatabaseDbNodeConsoleHistory#db_node_id}
  */
  readonly dbNodeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_db_node_console_history oci_database_db_node_console_history}
*/
export class DataOciDatabaseDbNodeConsoleHistory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_db_node_console_history";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseDbNodeConsoleHistory to import
  * @param importFromId The id of the existing DataOciDatabaseDbNodeConsoleHistory that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_db_node_console_history#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseDbNodeConsoleHistory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_db_node_console_history", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_db_node_console_history oci_database_db_node_console_history} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseDbNodeConsoleHistoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbNodeConsoleHistoryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_node_console_history',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

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

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      console_history_id: cdktf.stringToTerraform(this._consoleHistoryId),
      db_node_id: cdktf.stringToTerraform(this._dbNodeId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
