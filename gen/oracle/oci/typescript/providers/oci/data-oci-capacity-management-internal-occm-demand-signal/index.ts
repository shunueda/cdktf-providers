// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/capacity_management_internal_occm_demand_signal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCapacityManagementInternalOccmDemandSignalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/capacity_management_internal_occm_demand_signal#occm_demand_signal_id DataOciCapacityManagementInternalOccmDemandSignal#occm_demand_signal_id}
  */
  readonly occmDemandSignalId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/capacity_management_internal_occm_demand_signal oci_capacity_management_internal_occm_demand_signal}
*/
export class DataOciCapacityManagementInternalOccmDemandSignal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_internal_occm_demand_signal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCapacityManagementInternalOccmDemandSignal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCapacityManagementInternalOccmDemandSignal to import
  * @param importFromId The id of the existing DataOciCapacityManagementInternalOccmDemandSignal that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/capacity_management_internal_occm_demand_signal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCapacityManagementInternalOccmDemandSignal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_internal_occm_demand_signal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/capacity_management_internal_occm_demand_signal oci_capacity_management_internal_occm_demand_signal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCapacityManagementInternalOccmDemandSignalConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCapacityManagementInternalOccmDemandSignalConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_internal_occm_demand_signal',
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
    this._occmDemandSignalId = config.occmDemandSignalId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // occ_customer_group_id - computed: true, optional: false, required: false
  public get occCustomerGroupId() {
    return this.getStringAttribute('occ_customer_group_id');
  }

  // occm_demand_signal_id - computed: false, optional: false, required: true
  private _occmDemandSignalId?: string; 
  public get occmDemandSignalId() {
    return this.getStringAttribute('occm_demand_signal_id');
  }
  public set occmDemandSignalId(value: string) {
    this._occmDemandSignalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occmDemandSignalIdInput() {
    return this._occmDemandSignalId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
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
      occm_demand_signal_id: cdktf.stringToTerraform(this._occmDemandSignalId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      occm_demand_signal_id: {
        value: cdktf.stringToHclTerraform(this._occmDemandSignalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
