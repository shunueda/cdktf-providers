// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetSummarizeLibraryInventoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory#application_id DataOciJmsFleetSummarizeLibraryInventory#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory#fleet_id DataOciJmsFleetSummarizeLibraryInventory#fleet_id}
  */
  readonly fleetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory#id DataOciJmsFleetSummarizeLibraryInventory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory#managed_instance_id DataOciJmsFleetSummarizeLibraryInventory#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory#time_end DataOciJmsFleetSummarizeLibraryInventory#time_end}
  */
  readonly timeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory#time_start DataOciJmsFleetSummarizeLibraryInventory#time_start}
  */
  readonly timeStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory oci_jms_fleet_summarize_library_inventory}
*/
export class DataOciJmsFleetSummarizeLibraryInventory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_summarize_library_inventory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetSummarizeLibraryInventory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetSummarizeLibraryInventory to import
  * @param importFromId The id of the existing DataOciJmsFleetSummarizeLibraryInventory that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetSummarizeLibraryInventory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_summarize_library_inventory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/jms_fleet_summarize_library_inventory oci_jms_fleet_summarize_library_inventory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetSummarizeLibraryInventoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetSummarizeLibraryInventoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_summarize_library_inventory',
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
    this._applicationId = config.applicationId;
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._timeEnd = config.timeEnd;
    this._timeStart = config.timeStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // dynamically_detected_library_count - computed: true, optional: false, required: false
  public get dynamicallyDetectedLibraryCount() {
    return this.getNumberAttribute('dynamically_detected_library_count');
  }

  // fleet_id - computed: false, optional: true, required: false
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  public resetFleetId() {
    this._fleetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
  }

  // high_severity_library_count - computed: true, optional: false, required: false
  public get highSeverityLibraryCount() {
    return this.getNumberAttribute('high_severity_library_count');
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

  // low_severity_library_count - computed: true, optional: false, required: false
  public get lowSeverityLibraryCount() {
    return this.getNumberAttribute('low_severity_library_count');
  }

  // managed_instance_id - computed: false, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // medium_severity_library_count - computed: true, optional: false, required: false
  public get mediumSeverityLibraryCount() {
    return this.getNumberAttribute('medium_severity_library_count');
  }

  // statically_detected_library_count - computed: true, optional: false, required: false
  public get staticallyDetectedLibraryCount() {
    return this.getNumberAttribute('statically_detected_library_count');
  }

  // time_end - computed: false, optional: true, required: false
  private _timeEnd?: string; 
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }
  public set timeEnd(value: string) {
    this._timeEnd = value;
  }
  public resetTimeEnd() {
    this._timeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndInput() {
    return this._timeEnd;
  }

  // time_start - computed: false, optional: true, required: false
  private _timeStart?: string; 
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
  public set timeStart(value: string) {
    this._timeStart = value;
  }
  public resetTimeStart() {
    this._timeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartInput() {
    return this._timeStart;
  }

  // uncorrelated_package_count - computed: true, optional: false, required: false
  public get uncorrelatedPackageCount() {
    return this.getNumberAttribute('uncorrelated_package_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      time_end: cdktf.stringToTerraform(this._timeEnd),
      time_start: cdktf.stringToTerraform(this._timeStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_end: {
        value: cdktf.stringToHclTerraform(this._timeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_start: {
        value: cdktf.stringToHclTerraform(this._timeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
