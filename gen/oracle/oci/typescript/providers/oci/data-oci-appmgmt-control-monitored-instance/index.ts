// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/appmgmt_control_monitored_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAppmgmtControlMonitoredInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/appmgmt_control_monitored_instance#id DataOciAppmgmtControlMonitoredInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/appmgmt_control_monitored_instance#monitored_instance_id DataOciAppmgmtControlMonitoredInstance#monitored_instance_id}
  */
  readonly monitoredInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/appmgmt_control_monitored_instance oci_appmgmt_control_monitored_instance}
*/
export class DataOciAppmgmtControlMonitoredInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_appmgmt_control_monitored_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAppmgmtControlMonitoredInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAppmgmtControlMonitoredInstance to import
  * @param importFromId The id of the existing DataOciAppmgmtControlMonitoredInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/appmgmt_control_monitored_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAppmgmtControlMonitoredInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_appmgmt_control_monitored_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/appmgmt_control_monitored_instance oci_appmgmt_control_monitored_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAppmgmtControlMonitoredInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAppmgmtControlMonitoredInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_appmgmt_control_monitored_instance',
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
    this._monitoredInstanceId = config.monitoredInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // monitored_instance_id - computed: false, optional: false, required: true
  private _monitoredInstanceId?: string; 
  public get monitoredInstanceId() {
    return this.getStringAttribute('monitored_instance_id');
  }
  public set monitoredInstanceId(value: string) {
    this._monitoredInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredInstanceIdInput() {
    return this._monitoredInstanceId;
  }

  // monitoring_state - computed: true, optional: false, required: false
  public get monitoringState() {
    return this.getStringAttribute('monitoring_state');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitored_instance_id: cdktf.stringToTerraform(this._monitoredInstanceId),
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
      monitored_instance_id: {
        value: cdktf.stringToHclTerraform(this._monitoredInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
