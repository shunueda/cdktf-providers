// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_database_upgrade_history_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseDatabaseUpgradeHistoryEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}
  */
  readonly upgradeHistoryEntryId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_database_upgrade_history_entry oci_database_database_upgrade_history_entry}
*/
export class DataOciDatabaseDatabaseUpgradeHistoryEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_database_upgrade_history_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseDatabaseUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseDatabaseUpgradeHistoryEntry to import
  * @param importFromId The id of the existing DataOciDatabaseDatabaseUpgradeHistoryEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_database_upgrade_history_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseDatabaseUpgradeHistoryEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_database_upgrade_history_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_database_upgrade_history_entry oci_database_database_upgrade_history_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseDatabaseUpgradeHistoryEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseDatabaseUpgradeHistoryEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_database_upgrade_history_entry',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._id = config.id;
    this._upgradeHistoryEntryId = config.upgradeHistoryEntryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_db_home_id - computed: true, optional: false, required: false
  public get sourceDbHomeId() {
    return this.getStringAttribute('source_db_home_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_database_software_image_id - computed: true, optional: false, required: false
  public get targetDatabaseSoftwareImageId() {
    return this.getStringAttribute('target_database_software_image_id');
  }

  // target_db_home_id - computed: true, optional: false, required: false
  public get targetDbHomeId() {
    return this.getStringAttribute('target_db_home_id');
  }

  // target_db_version - computed: true, optional: false, required: false
  public get targetDbVersion() {
    return this.getStringAttribute('target_db_version');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // upgrade_history_entry_id - computed: false, optional: false, required: true
  private _upgradeHistoryEntryId?: string; 
  public get upgradeHistoryEntryId() {
    return this.getStringAttribute('upgrade_history_entry_id');
  }
  public set upgradeHistoryEntryId(value: string) {
    this._upgradeHistoryEntryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeHistoryEntryIdInput() {
    return this._upgradeHistoryEntryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.stringToTerraform(this._databaseId),
      id: cdktf.stringToTerraform(this._id),
      upgrade_history_entry_id: cdktf.stringToTerraform(this._upgradeHistoryEntryId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_history_entry_id: {
        value: cdktf.stringToHclTerraform(this._upgradeHistoryEntryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
