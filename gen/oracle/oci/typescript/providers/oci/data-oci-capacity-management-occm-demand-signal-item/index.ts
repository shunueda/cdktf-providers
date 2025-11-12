// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_occm_demand_signal_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCapacityManagementOccmDemandSignalItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_occm_demand_signal_item#occm_demand_signal_item_id DataOciCapacityManagementOccmDemandSignalItem#occm_demand_signal_item_id}
  */
  readonly occmDemandSignalItemId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_occm_demand_signal_item oci_capacity_management_occm_demand_signal_item}
*/
export class DataOciCapacityManagementOccmDemandSignalItem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_occm_demand_signal_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCapacityManagementOccmDemandSignalItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCapacityManagementOccmDemandSignalItem to import
  * @param importFromId The id of the existing DataOciCapacityManagementOccmDemandSignalItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_occm_demand_signal_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCapacityManagementOccmDemandSignalItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_occm_demand_signal_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/capacity_management_occm_demand_signal_item oci_capacity_management_occm_demand_signal_item} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCapacityManagementOccmDemandSignalItemConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCapacityManagementOccmDemandSignalItemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_occm_demand_signal_item',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._occmDemandSignalItemId = config.occmDemandSignalItemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
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

  // demand_quantity - computed: true, optional: false, required: false
  public get demandQuantity() {
    return this.getStringAttribute('demand_quantity');
  }

  // demand_signal_catalog_resource_id - computed: true, optional: false, required: false
  public get demandSignalCatalogResourceId() {
    return this.getStringAttribute('demand_signal_catalog_resource_id');
  }

  // demand_signal_id - computed: true, optional: false, required: false
  public get demandSignalId() {
    return this.getStringAttribute('demand_signal_id');
  }

  // demand_signal_namespace - computed: true, optional: false, required: false
  public get demandSignalNamespace() {
    return this.getStringAttribute('demand_signal_namespace');
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

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // occm_demand_signal_item_id - computed: false, optional: false, required: true
  private _occmDemandSignalItemId?: string; 
  public get occmDemandSignalItemId() {
    return this.getStringAttribute('occm_demand_signal_item_id');
  }
  public set occmDemandSignalItemId(value: string) {
    this._occmDemandSignalItemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occmDemandSignalItemIdInput() {
    return this._occmDemandSignalItemId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // request_type - computed: true, optional: false, required: false
  public get requestType() {
    return this.getStringAttribute('request_type');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_properties - computed: true, optional: false, required: false
  private _resourceProperties = new cdktf.StringMap(this, "resource_properties");
  public get resourceProperties() {
    return this._resourceProperties;
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

  // target_compartment_id - computed: true, optional: false, required: false
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
  }

  // time_needed_before - computed: true, optional: false, required: false
  public get timeNeededBefore() {
    return this.getStringAttribute('time_needed_before');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      occm_demand_signal_item_id: cdktf.stringToTerraform(this._occmDemandSignalItemId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      occm_demand_signal_item_id: {
        value: cdktf.stringToHclTerraform(this._occmDemandSignalItemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
