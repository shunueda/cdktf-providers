// https://registry.terraform.io/providers/files-com/files/0.1.415/docs/data-sources/action_notification_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesActionNotificationExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * History Export ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/data-sources/action_notification_export#id DataFilesActionNotificationExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/data-sources/action_notification_export files_action_notification_export}
*/
export class DataFilesActionNotificationExport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_action_notification_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesActionNotificationExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesActionNotificationExport to import
  * @param importFromId The id of the existing DataFilesActionNotificationExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/data-sources/action_notification_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesActionNotificationExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_action_notification_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.415/docs/data-sources/action_notification_export files_action_notification_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesActionNotificationExportConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesActionNotificationExportConfig) {
    super(scope, id, {
      terraformResourceType: 'files_action_notification_export',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.415',
        providerVersionConstraint: '0.1.415'
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

  // export_version - computed: true, optional: false, required: false
  public get exportVersion() {
    return this.getStringAttribute('export_version');
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

  // query_folder - computed: true, optional: false, required: false
  public get queryFolder() {
    return this.getStringAttribute('query_folder');
  }

  // query_message - computed: true, optional: false, required: false
  public get queryMessage() {
    return this.getStringAttribute('query_message');
  }

  // query_path - computed: true, optional: false, required: false
  public get queryPath() {
    return this.getStringAttribute('query_path');
  }

  // query_request_method - computed: true, optional: false, required: false
  public get queryRequestMethod() {
    return this.getStringAttribute('query_request_method');
  }

  // query_request_url - computed: true, optional: false, required: false
  public get queryRequestUrl() {
    return this.getStringAttribute('query_request_url');
  }

  // query_status - computed: true, optional: false, required: false
  public get queryStatus() {
    return this.getStringAttribute('query_status');
  }

  // query_success - computed: true, optional: false, required: false
  public get querySuccess() {
    return this.getBooleanAttribute('query_success');
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
