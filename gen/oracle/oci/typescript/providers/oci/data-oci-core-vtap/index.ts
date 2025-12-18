// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_vtap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreVtapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_vtap#vtap_id DataOciCoreVtap#vtap_id}
  */
  readonly vtapId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_vtap oci_core_vtap}
*/
export class DataOciCoreVtap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_vtap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreVtap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreVtap to import
  * @param importFromId The id of the existing DataOciCoreVtap that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_vtap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreVtap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_vtap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_vtap oci_core_vtap} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreVtapConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreVtapConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_vtap',
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
    this._vtapId = config.vtapId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_filter_id - computed: true, optional: false, required: false
  public get captureFilterId() {
    return this.getStringAttribute('capture_filter_id');
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // encapsulation_protocol - computed: true, optional: false, required: false
  public get encapsulationProtocol() {
    return this.getStringAttribute('encapsulation_protocol');
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

  // is_vtap_enabled - computed: true, optional: false, required: false
  public get isVtapEnabled() {
    return this.getBooleanAttribute('is_vtap_enabled');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // max_packet_size - computed: true, optional: false, required: false
  public get maxPacketSize() {
    return this.getNumberAttribute('max_packet_size');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_private_endpoint_ip - computed: true, optional: false, required: false
  public get sourcePrivateEndpointIp() {
    return this.getStringAttribute('source_private_endpoint_ip');
  }

  // source_private_endpoint_subnet_id - computed: true, optional: false, required: false
  public get sourcePrivateEndpointSubnetId() {
    return this.getStringAttribute('source_private_endpoint_subnet_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_ip - computed: true, optional: false, required: false
  public get targetIp() {
    return this.getStringAttribute('target_ip');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // traffic_mode - computed: true, optional: false, required: false
  public get trafficMode() {
    return this.getStringAttribute('traffic_mode');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // vtap_id - computed: false, optional: false, required: true
  private _vtapId?: string; 
  public get vtapId() {
    return this.getStringAttribute('vtap_id');
  }
  public set vtapId(value: string) {
    this._vtapId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vtapIdInput() {
    return this._vtapId;
  }

  // vxlan_network_identifier - computed: true, optional: false, required: false
  public get vxlanNetworkIdentifier() {
    return this.getStringAttribute('vxlan_network_identifier');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      vtap_id: cdktf.stringToTerraform(this._vtapId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      vtap_id: {
        value: cdktf.stringToHclTerraform(this._vtapId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
