// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_internal_occm_demand_signal_delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCapacityManagementInternalOccmDemandSignalDeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_internal_occm_demand_signal_delivery#occm_demand_signal_delivery_id DataOciCapacityManagementInternalOccmDemandSignalDelivery#occm_demand_signal_delivery_id}
  */
  readonly occmDemandSignalDeliveryId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_internal_occm_demand_signal_delivery oci_capacity_management_internal_occm_demand_signal_delivery}
*/
export class DataOciCapacityManagementInternalOccmDemandSignalDelivery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_internal_occm_demand_signal_delivery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCapacityManagementInternalOccmDemandSignalDelivery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCapacityManagementInternalOccmDemandSignalDelivery to import
  * @param importFromId The id of the existing DataOciCapacityManagementInternalOccmDemandSignalDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_internal_occm_demand_signal_delivery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCapacityManagementInternalOccmDemandSignalDelivery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_internal_occm_demand_signal_delivery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_internal_occm_demand_signal_delivery oci_capacity_management_internal_occm_demand_signal_delivery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCapacityManagementInternalOccmDemandSignalDeliveryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCapacityManagementInternalOccmDemandSignalDeliveryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_internal_occm_demand_signal_delivery',
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
    this._occmDemandSignalDeliveryId = config.occmDemandSignalDeliveryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_quantity - computed: true, optional: false, required: false
  public get acceptedQuantity() {
    return this.getStringAttribute('accepted_quantity');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // demand_signal_id - computed: true, optional: false, required: false
  public get demandSignalId() {
    return this.getStringAttribute('demand_signal_id');
  }

  // demand_signal_item_id - computed: true, optional: false, required: false
  public get demandSignalItemId() {
    return this.getStringAttribute('demand_signal_item_id');
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

  // justification - computed: true, optional: false, required: false
  public get justification() {
    return this.getStringAttribute('justification');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // occ_customer_group_id - computed: true, optional: false, required: false
  public get occCustomerGroupId() {
    return this.getStringAttribute('occ_customer_group_id');
  }

  // occm_demand_signal_delivery_id - computed: false, optional: false, required: true
  private _occmDemandSignalDeliveryId?: string; 
  public get occmDemandSignalDeliveryId() {
    return this.getStringAttribute('occm_demand_signal_delivery_id');
  }
  public set occmDemandSignalDeliveryId(value: string) {
    this._occmDemandSignalDeliveryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occmDemandSignalDeliveryIdInput() {
    return this._occmDemandSignalDeliveryId;
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

  // time_delivered - computed: true, optional: false, required: false
  public get timeDelivered() {
    return this.getStringAttribute('time_delivered');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      occm_demand_signal_delivery_id: cdktf.stringToTerraform(this._occmDemandSignalDeliveryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      occm_demand_signal_delivery_id: {
        value: cdktf.stringToHclTerraform(this._occmDemandSignalDeliveryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
