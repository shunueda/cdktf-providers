// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbook_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementRunbookExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbook_export#export_id DataOciFleetAppsManagementRunbookExport#export_id}
  */
  readonly exportId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbook_export#id DataOciFleetAppsManagementRunbookExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbook_export#runbook_id DataOciFleetAppsManagementRunbookExport#runbook_id}
  */
  readonly runbookId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbook_export oci_fleet_apps_management_runbook_export}
*/
export class DataOciFleetAppsManagementRunbookExport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_runbook_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementRunbookExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementRunbookExport to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementRunbookExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbook_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementRunbookExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_runbook_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbook_export oci_fleet_apps_management_runbook_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementRunbookExportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementRunbookExportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_runbook_export',
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
    this._exportId = config.exportId;
    this._id = config.id;
    this._runbookId = config.runbookId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMap(this, "details");
  public get details() {
    return this._details;
  }

  // export_id - computed: false, optional: false, required: true
  private _exportId?: string; 
  public get exportId() {
    return this.getStringAttribute('export_id');
  }
  public set exportId(value: string) {
    this._exportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportIdInput() {
    return this._exportId;
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

  // runbook_id - computed: false, optional: false, required: true
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // runbook_name - computed: true, optional: false, required: false
  public get runbookName() {
    return this.getStringAttribute('runbook_name');
  }

  // runbook_version - computed: true, optional: false, required: false
  public get runbookVersion() {
    return this.getStringAttribute('runbook_version');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tracking_id - computed: true, optional: false, required: false
  public get trackingId() {
    return this.getStringAttribute('tracking_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_id: cdktf.stringToTerraform(this._exportId),
      id: cdktf.stringToTerraform(this._id),
      runbook_id: cdktf.stringToTerraform(this._runbookId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_id: {
        value: cdktf.stringToHclTerraform(this._exportId),
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
      runbook_id: {
        value: cdktf.stringToHclTerraform(this._runbookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
