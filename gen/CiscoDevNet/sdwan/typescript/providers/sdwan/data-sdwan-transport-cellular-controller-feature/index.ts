// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_controller_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportCellularControllerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_controller_feature#feature_profile_id DataSdwanTransportCellularControllerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_controller_feature#id DataSdwanTransportCellularControllerFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_controller_feature sdwan_transport_cellular_controller_feature}
*/
export class DataSdwanTransportCellularControllerFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_cellular_controller_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportCellularControllerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportCellularControllerFeature to import
  * @param importFromId The id of the existing DataSdwanTransportCellularControllerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_controller_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportCellularControllerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_cellular_controller_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_cellular_controller_feature sdwan_transport_cellular_controller_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportCellularControllerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportCellularControllerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_cellular_controller_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cellular_id - computed: true, optional: false, required: false
  public get cellularId() {
    return this.getStringAttribute('cellular_id');
  }

  // cellular_id_variable - computed: true, optional: false, required: false
  public get cellularIdVariable() {
    return this.getStringAttribute('cellular_id_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // firmware_auto_sim - computed: true, optional: false, required: false
  public get firmwareAutoSim() {
    return this.getBooleanAttribute('firmware_auto_sim');
  }

  // firmware_auto_sim_variable - computed: true, optional: false, required: false
  public get firmwareAutoSimVariable() {
    return this.getStringAttribute('firmware_auto_sim_variable');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_sim_slot - computed: true, optional: false, required: false
  public get primarySimSlot() {
    return this.getNumberAttribute('primary_sim_slot');
  }

  // primary_sim_slot_variable - computed: true, optional: false, required: false
  public get primarySimSlotVariable() {
    return this.getStringAttribute('primary_sim_slot_variable');
  }

  // sim_failover_retries - computed: true, optional: false, required: false
  public get simFailoverRetries() {
    return this.getNumberAttribute('sim_failover_retries');
  }

  // sim_failover_retries_variable - computed: true, optional: false, required: false
  public get simFailoverRetriesVariable() {
    return this.getStringAttribute('sim_failover_retries_variable');
  }

  // sim_failover_timeout - computed: true, optional: false, required: false
  public get simFailoverTimeout() {
    return this.getNumberAttribute('sim_failover_timeout');
  }

  // sim_failover_timeout_variable - computed: true, optional: false, required: false
  public get simFailoverTimeoutVariable() {
    return this.getStringAttribute('sim_failover_timeout_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
