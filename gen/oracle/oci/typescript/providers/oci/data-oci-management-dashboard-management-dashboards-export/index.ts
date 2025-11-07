// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_dashboard_management_dashboards_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciManagementDashboardManagementDashboardsExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_dashboard_management_dashboards_export#export_dashboard_id DataOciManagementDashboardManagementDashboardsExport#export_dashboard_id}
  */
  readonly exportDashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_dashboard_management_dashboards_export#id DataOciManagementDashboardManagementDashboardsExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_dashboard_management_dashboards_export oci_management_dashboard_management_dashboards_export}
*/
export class DataOciManagementDashboardManagementDashboardsExport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_management_dashboard_management_dashboards_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciManagementDashboardManagementDashboardsExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciManagementDashboardManagementDashboardsExport to import
  * @param importFromId The id of the existing DataOciManagementDashboardManagementDashboardsExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_dashboard_management_dashboards_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciManagementDashboardManagementDashboardsExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_management_dashboard_management_dashboards_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/management_dashboard_management_dashboards_export oci_management_dashboard_management_dashboards_export} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciManagementDashboardManagementDashboardsExportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciManagementDashboardManagementDashboardsExportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_management_dashboard_management_dashboards_export',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exportDashboardId = config.exportDashboardId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_dashboard_id - computed: false, optional: false, required: true
  private _exportDashboardId?: string; 
  public get exportDashboardId() {
    return this.getStringAttribute('export_dashboard_id');
  }
  public set exportDashboardId(value: string) {
    this._exportDashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDashboardIdInput() {
    return this._exportDashboardId;
  }

  // export_details - computed: true, optional: false, required: false
  public get exportDetails() {
    return this.getStringAttribute('export_details');
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
      export_dashboard_id: cdktf.stringToTerraform(this._exportDashboardId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_dashboard_id: {
        value: cdktf.stringToHclTerraform(this._exportDashboardId),
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
