// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_rf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceRfProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_rf_profile#id DataMerakiApplianceRfProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the new profile. Must be unique. This param is required on creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_rf_profile#name DataMerakiApplianceRfProfile#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_rf_profile#network_id DataMerakiApplianceRfProfile#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_rf_profile meraki_appliance_rf_profile}
*/
export class DataMerakiApplianceRfProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_rf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceRfProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceRfProfile to import
  * @param importFromId The id of the existing DataMerakiApplianceRfProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_rf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceRfProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_rf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_rf_profile meraki_appliance_rf_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceRfProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceRfProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_rf_profile',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
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
    this._name = config.name;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // five_ghz_settings_ax_enabled - computed: true, optional: false, required: false
  public get fiveGhzSettingsAxEnabled() {
    return this.getBooleanAttribute('five_ghz_settings_ax_enabled');
  }

  // five_ghz_settings_min_bitrate - computed: true, optional: false, required: false
  public get fiveGhzSettingsMinBitrate() {
    return this.getNumberAttribute('five_ghz_settings_min_bitrate');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // per_ssid_settings_1_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings1BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_1_band_operation_mode');
  }

  // per_ssid_settings_1_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings1BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_1_band_steering_enabled');
  }

  // per_ssid_settings_2_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings2BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_2_band_operation_mode');
  }

  // per_ssid_settings_2_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings2BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_2_band_steering_enabled');
  }

  // per_ssid_settings_3_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings3BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_3_band_operation_mode');
  }

  // per_ssid_settings_3_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings3BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_3_band_steering_enabled');
  }

  // per_ssid_settings_4_band_operation_mode - computed: true, optional: false, required: false
  public get perSsidSettings4BandOperationMode() {
    return this.getStringAttribute('per_ssid_settings_4_band_operation_mode');
  }

  // per_ssid_settings_4_band_steering_enabled - computed: true, optional: false, required: false
  public get perSsidSettings4BandSteeringEnabled() {
    return this.getBooleanAttribute('per_ssid_settings_4_band_steering_enabled');
  }

  // two_four_ghz_settings_ax_enabled - computed: true, optional: false, required: false
  public get twoFourGhzSettingsAxEnabled() {
    return this.getBooleanAttribute('two_four_ghz_settings_ax_enabled');
  }

  // two_four_ghz_settings_min_bitrate - computed: true, optional: false, required: false
  public get twoFourGhzSettingsMinBitrate() {
    return this.getNumberAttribute('two_four_ghz_settings_min_bitrate');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
