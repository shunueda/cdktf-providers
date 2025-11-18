// https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/history_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesHistoryExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * History Export ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/history_export#id DataFilesHistoryExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/history_export files_history_export}
*/
export class DataFilesHistoryExport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_history_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesHistoryExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesHistoryExport to import
  * @param importFromId The id of the existing DataFilesHistoryExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/history_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesHistoryExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_history_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/history_export files_history_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesHistoryExportConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesHistoryExportConfig) {
    super(scope, id, {
      terraformResourceType: 'files_history_export',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.383',
        providerVersionConstraint: '0.1.383'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_at - computed: true, optional: false, required: false
  public get endAt() {
    return this.getStringAttribute('end_at');
  }

  // history_version - computed: true, optional: false, required: false
  public get historyVersion() {
    return this.getStringAttribute('history_version');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // query_action - computed: true, optional: false, required: false
  public get queryAction() {
    return this.getStringAttribute('query_action');
  }

  // query_destination - computed: true, optional: false, required: false
  public get queryDestination() {
    return this.getStringAttribute('query_destination');
  }

  // query_failure_type - computed: true, optional: false, required: false
  public get queryFailureType() {
    return this.getStringAttribute('query_failure_type');
  }

  // query_file_id - computed: true, optional: false, required: false
  public get queryFileId() {
    return this.getStringAttribute('query_file_id');
  }

  // query_folder - computed: true, optional: false, required: false
  public get queryFolder() {
    return this.getStringAttribute('query_folder');
  }

  // query_interface - computed: true, optional: false, required: false
  public get queryInterface() {
    return this.getStringAttribute('query_interface');
  }

  // query_ip - computed: true, optional: false, required: false
  public get queryIp() {
    return this.getStringAttribute('query_ip');
  }

  // query_parent_id - computed: true, optional: false, required: false
  public get queryParentId() {
    return this.getStringAttribute('query_parent_id');
  }

  // query_path - computed: true, optional: false, required: false
  public get queryPath() {
    return this.getStringAttribute('query_path');
  }

  // query_src - computed: true, optional: false, required: false
  public get querySrc() {
    return this.getStringAttribute('query_src');
  }

  // query_target_id - computed: true, optional: false, required: false
  public get queryTargetId() {
    return this.getStringAttribute('query_target_id');
  }

  // query_target_name - computed: true, optional: false, required: false
  public get queryTargetName() {
    return this.getStringAttribute('query_target_name');
  }

  // query_target_permission - computed: true, optional: false, required: false
  public get queryTargetPermission() {
    return this.getStringAttribute('query_target_permission');
  }

  // query_target_permission_set - computed: true, optional: false, required: false
  public get queryTargetPermissionSet() {
    return this.getStringAttribute('query_target_permission_set');
  }

  // query_target_platform - computed: true, optional: false, required: false
  public get queryTargetPlatform() {
    return this.getStringAttribute('query_target_platform');
  }

  // query_target_user_id - computed: true, optional: false, required: false
  public get queryTargetUserId() {
    return this.getStringAttribute('query_target_user_id');
  }

  // query_target_username - computed: true, optional: false, required: false
  public get queryTargetUsername() {
    return this.getStringAttribute('query_target_username');
  }

  // query_user_id - computed: true, optional: false, required: false
  public get queryUserId() {
    return this.getStringAttribute('query_user_id');
  }

  // query_username - computed: true, optional: false, required: false
  public get queryUsername() {
    return this.getStringAttribute('query_username');
  }

  // results_url - computed: true, optional: false, required: false
  public get resultsUrl() {
    return this.getStringAttribute('results_url');
  }

  // start_at - computed: true, optional: false, required: false
  public get startAt() {
    return this.getStringAttribute('start_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
