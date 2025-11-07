// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_firmware_upgrades
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiNetworkFirmwareUpgradesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_firmware_upgrades#network_id DataMerakiNetworkFirmwareUpgrades#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_firmware_upgrades meraki_network_firmware_upgrades}
*/
export class DataMerakiNetworkFirmwareUpgrades extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_firmware_upgrades";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiNetworkFirmwareUpgrades resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiNetworkFirmwareUpgrades to import
  * @param importFromId The id of the existing DataMerakiNetworkFirmwareUpgrades that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_firmware_upgrades#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiNetworkFirmwareUpgrades to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_firmware_upgrades", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_firmware_upgrades meraki_network_firmware_upgrades} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiNetworkFirmwareUpgradesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiNetworkFirmwareUpgradesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_firmware_upgrades',
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
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // products_appliance_next_upgrade_time - computed: true, optional: false, required: false
  public get productsApplianceNextUpgradeTime() {
    return this.getStringAttribute('products_appliance_next_upgrade_time');
  }

  // products_appliance_next_upgrade_to_version_id - computed: true, optional: false, required: false
  public get productsApplianceNextUpgradeToVersionId() {
    return this.getStringAttribute('products_appliance_next_upgrade_to_version_id');
  }

  // products_appliance_participate_in_next_beta_release - computed: true, optional: false, required: false
  public get productsApplianceParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_appliance_participate_in_next_beta_release');
  }

  // products_camera_next_upgrade_time - computed: true, optional: false, required: false
  public get productsCameraNextUpgradeTime() {
    return this.getStringAttribute('products_camera_next_upgrade_time');
  }

  // products_camera_next_upgrade_to_version_id - computed: true, optional: false, required: false
  public get productsCameraNextUpgradeToVersionId() {
    return this.getStringAttribute('products_camera_next_upgrade_to_version_id');
  }

  // products_camera_participate_in_next_beta_release - computed: true, optional: false, required: false
  public get productsCameraParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_camera_participate_in_next_beta_release');
  }

  // products_cellular_gateway_next_upgrade_time - computed: true, optional: false, required: false
  public get productsCellularGatewayNextUpgradeTime() {
    return this.getStringAttribute('products_cellular_gateway_next_upgrade_time');
  }

  // products_cellular_gateway_next_upgrade_to_version_id - computed: true, optional: false, required: false
  public get productsCellularGatewayNextUpgradeToVersionId() {
    return this.getStringAttribute('products_cellular_gateway_next_upgrade_to_version_id');
  }

  // products_cellular_gateway_participate_in_next_beta_release - computed: true, optional: false, required: false
  public get productsCellularGatewayParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_cellular_gateway_participate_in_next_beta_release');
  }

  // products_secure_connect_next_upgrade_time - computed: true, optional: false, required: false
  public get productsSecureConnectNextUpgradeTime() {
    return this.getStringAttribute('products_secure_connect_next_upgrade_time');
  }

  // products_secure_connect_next_upgrade_to_version_id - computed: true, optional: false, required: false
  public get productsSecureConnectNextUpgradeToVersionId() {
    return this.getStringAttribute('products_secure_connect_next_upgrade_to_version_id');
  }

  // products_secure_connect_participate_in_next_beta_release - computed: true, optional: false, required: false
  public get productsSecureConnectParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_secure_connect_participate_in_next_beta_release');
  }

  // products_sensor_next_upgrade_time - computed: true, optional: false, required: false
  public get productsSensorNextUpgradeTime() {
    return this.getStringAttribute('products_sensor_next_upgrade_time');
  }

  // products_sensor_next_upgrade_to_version_id - computed: true, optional: false, required: false
  public get productsSensorNextUpgradeToVersionId() {
    return this.getStringAttribute('products_sensor_next_upgrade_to_version_id');
  }

  // products_sensor_participate_in_next_beta_release - computed: true, optional: false, required: false
  public get productsSensorParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_sensor_participate_in_next_beta_release');
  }

  // products_switch_catalyst_next_upgrade_time - computed: true, optional: false, required: false
  public get productsSwitchCatalystNextUpgradeTime() {
    return this.getStringAttribute('products_switch_catalyst_next_upgrade_time');
  }

  // products_switch_catalyst_next_upgrade_to_version_id - computed: true, optional: false, required: false
  public get productsSwitchCatalystNextUpgradeToVersionId() {
    return this.getStringAttribute('products_switch_catalyst_next_upgrade_to_version_id');
  }

  // products_switch_catalyst_participate_in_next_beta_release - computed: true, optional: false, required: false
  public get productsSwitchCatalystParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_switch_catalyst_participate_in_next_beta_release');
  }

  // products_switch_next_upgrade_time - computed: true, optional: false, required: false
  public get productsSwitchNextUpgradeTime() {
    return this.getStringAttribute('products_switch_next_upgrade_time');
  }

  // products_switch_next_upgrade_to_version_id - computed: true, optional: false, required: false
  public get productsSwitchNextUpgradeToVersionId() {
    return this.getStringAttribute('products_switch_next_upgrade_to_version_id');
  }

  // products_switch_participate_in_next_beta_release - computed: true, optional: false, required: false
  public get productsSwitchParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_switch_participate_in_next_beta_release');
  }

  // products_wireless_controller_next_upgrade_time - computed: true, optional: false, required: false
  public get productsWirelessControllerNextUpgradeTime() {
    return this.getStringAttribute('products_wireless_controller_next_upgrade_time');
  }

  // products_wireless_controller_next_upgrade_to_version_id - computed: true, optional: false, required: false
  public get productsWirelessControllerNextUpgradeToVersionId() {
    return this.getStringAttribute('products_wireless_controller_next_upgrade_to_version_id');
  }

  // products_wireless_controller_participate_in_next_beta_release - computed: true, optional: false, required: false
  public get productsWirelessControllerParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_wireless_controller_participate_in_next_beta_release');
  }

  // products_wireless_next_upgrade_time - computed: true, optional: false, required: false
  public get productsWirelessNextUpgradeTime() {
    return this.getStringAttribute('products_wireless_next_upgrade_time');
  }

  // products_wireless_next_upgrade_to_version_id - computed: true, optional: false, required: false
  public get productsWirelessNextUpgradeToVersionId() {
    return this.getStringAttribute('products_wireless_next_upgrade_to_version_id');
  }

  // products_wireless_participate_in_next_beta_release - computed: true, optional: false, required: false
  public get productsWirelessParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_wireless_participate_in_next_beta_release');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // upgrade_window_day_of_week - computed: true, optional: false, required: false
  public get upgradeWindowDayOfWeek() {
    return this.getStringAttribute('upgrade_window_day_of_week');
  }

  // upgrade_window_hour_of_day - computed: true, optional: false, required: false
  public get upgradeWindowHourOfDay() {
    return this.getStringAttribute('upgrade_window_hour_of_day');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
