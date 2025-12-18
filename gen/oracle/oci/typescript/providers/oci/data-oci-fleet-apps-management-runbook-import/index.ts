// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_runbook_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementRunbookImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_runbook_import#id DataOciFleetAppsManagementRunbookImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_runbook_import#import_id DataOciFleetAppsManagementRunbookImport#import_id}
  */
  readonly importId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_runbook_import#runbook_id DataOciFleetAppsManagementRunbookImport#runbook_id}
  */
  readonly runbookId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_runbook_import oci_fleet_apps_management_runbook_import}
*/
export class DataOciFleetAppsManagementRunbookImport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_runbook_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementRunbookImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementRunbookImport to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementRunbookImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_runbook_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementRunbookImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_runbook_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_apps_management_runbook_import oci_fleet_apps_management_runbook_import} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementRunbookImportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementRunbookImportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_runbook_import',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._importId = config.importId;
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

  // import_id - computed: false, optional: false, required: true
  private _importId?: string; 
  public get importId() {
    return this.getStringAttribute('import_id');
  }
  public set importId(value: string) {
    this._importId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importIdInput() {
    return this._importId;
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
      id: cdktf.stringToTerraform(this._id),
      import_id: cdktf.stringToTerraform(this._importId),
      runbook_id: cdktf.stringToTerraform(this._runbookId),
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
      import_id: {
        value: cdktf.stringToHclTerraform(this._importId),
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
