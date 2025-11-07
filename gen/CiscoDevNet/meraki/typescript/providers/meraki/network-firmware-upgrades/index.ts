// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkFirmwareUpgradesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#network_id NetworkFirmwareUpgrades#network_id}
  */
  readonly networkId: string;
  /**
  * The time of the last successful upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_appliance_next_upgrade_time NetworkFirmwareUpgrades#products_appliance_next_upgrade_time}
  */
  readonly productsApplianceNextUpgradeTime?: string;
  /**
  * The version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_appliance_next_upgrade_to_version_id NetworkFirmwareUpgrades#products_appliance_next_upgrade_to_version_id}
  */
  readonly productsApplianceNextUpgradeToVersionId?: string;
  /**
  * Whether or not the network wants beta firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_appliance_participate_in_next_beta_release NetworkFirmwareUpgrades#products_appliance_participate_in_next_beta_release}
  */
  readonly productsApplianceParticipateInNextBetaRelease?: boolean | cdktf.IResolvable;
  /**
  * The time of the last successful upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_camera_next_upgrade_time NetworkFirmwareUpgrades#products_camera_next_upgrade_time}
  */
  readonly productsCameraNextUpgradeTime?: string;
  /**
  * The version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_camera_next_upgrade_to_version_id NetworkFirmwareUpgrades#products_camera_next_upgrade_to_version_id}
  */
  readonly productsCameraNextUpgradeToVersionId?: string;
  /**
  * Whether or not the network wants beta firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_camera_participate_in_next_beta_release NetworkFirmwareUpgrades#products_camera_participate_in_next_beta_release}
  */
  readonly productsCameraParticipateInNextBetaRelease?: boolean | cdktf.IResolvable;
  /**
  * The time of the last successful upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_cellular_gateway_next_upgrade_time NetworkFirmwareUpgrades#products_cellular_gateway_next_upgrade_time}
  */
  readonly productsCellularGatewayNextUpgradeTime?: string;
  /**
  * The version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_cellular_gateway_next_upgrade_to_version_id NetworkFirmwareUpgrades#products_cellular_gateway_next_upgrade_to_version_id}
  */
  readonly productsCellularGatewayNextUpgradeToVersionId?: string;
  /**
  * Whether or not the network wants beta firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_cellular_gateway_participate_in_next_beta_release NetworkFirmwareUpgrades#products_cellular_gateway_participate_in_next_beta_release}
  */
  readonly productsCellularGatewayParticipateInNextBetaRelease?: boolean | cdktf.IResolvable;
  /**
  * The time of the last successful upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_secure_connect_next_upgrade_time NetworkFirmwareUpgrades#products_secure_connect_next_upgrade_time}
  */
  readonly productsSecureConnectNextUpgradeTime?: string;
  /**
  * The version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_secure_connect_next_upgrade_to_version_id NetworkFirmwareUpgrades#products_secure_connect_next_upgrade_to_version_id}
  */
  readonly productsSecureConnectNextUpgradeToVersionId?: string;
  /**
  * Whether or not the network wants beta firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_secure_connect_participate_in_next_beta_release NetworkFirmwareUpgrades#products_secure_connect_participate_in_next_beta_release}
  */
  readonly productsSecureConnectParticipateInNextBetaRelease?: boolean | cdktf.IResolvable;
  /**
  * The time of the last successful upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_sensor_next_upgrade_time NetworkFirmwareUpgrades#products_sensor_next_upgrade_time}
  */
  readonly productsSensorNextUpgradeTime?: string;
  /**
  * The version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_sensor_next_upgrade_to_version_id NetworkFirmwareUpgrades#products_sensor_next_upgrade_to_version_id}
  */
  readonly productsSensorNextUpgradeToVersionId?: string;
  /**
  * Whether or not the network wants beta firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_sensor_participate_in_next_beta_release NetworkFirmwareUpgrades#products_sensor_participate_in_next_beta_release}
  */
  readonly productsSensorParticipateInNextBetaRelease?: boolean | cdktf.IResolvable;
  /**
  * The time of the last successful upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_switch_catalyst_next_upgrade_time NetworkFirmwareUpgrades#products_switch_catalyst_next_upgrade_time}
  */
  readonly productsSwitchCatalystNextUpgradeTime?: string;
  /**
  * The version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_switch_catalyst_next_upgrade_to_version_id NetworkFirmwareUpgrades#products_switch_catalyst_next_upgrade_to_version_id}
  */
  readonly productsSwitchCatalystNextUpgradeToVersionId?: string;
  /**
  * Whether or not the network wants beta firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_switch_catalyst_participate_in_next_beta_release NetworkFirmwareUpgrades#products_switch_catalyst_participate_in_next_beta_release}
  */
  readonly productsSwitchCatalystParticipateInNextBetaRelease?: boolean | cdktf.IResolvable;
  /**
  * The time of the last successful upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_switch_next_upgrade_time NetworkFirmwareUpgrades#products_switch_next_upgrade_time}
  */
  readonly productsSwitchNextUpgradeTime?: string;
  /**
  * The version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_switch_next_upgrade_to_version_id NetworkFirmwareUpgrades#products_switch_next_upgrade_to_version_id}
  */
  readonly productsSwitchNextUpgradeToVersionId?: string;
  /**
  * Whether or not the network wants beta firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_switch_participate_in_next_beta_release NetworkFirmwareUpgrades#products_switch_participate_in_next_beta_release}
  */
  readonly productsSwitchParticipateInNextBetaRelease?: boolean | cdktf.IResolvable;
  /**
  * The time of the last successful upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_wireless_controller_next_upgrade_time NetworkFirmwareUpgrades#products_wireless_controller_next_upgrade_time}
  */
  readonly productsWirelessControllerNextUpgradeTime?: string;
  /**
  * The version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_wireless_controller_next_upgrade_to_version_id NetworkFirmwareUpgrades#products_wireless_controller_next_upgrade_to_version_id}
  */
  readonly productsWirelessControllerNextUpgradeToVersionId?: string;
  /**
  * Whether or not the network wants beta firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_wireless_controller_participate_in_next_beta_release NetworkFirmwareUpgrades#products_wireless_controller_participate_in_next_beta_release}
  */
  readonly productsWirelessControllerParticipateInNextBetaRelease?: boolean | cdktf.IResolvable;
  /**
  * The time of the last successful upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_wireless_next_upgrade_time NetworkFirmwareUpgrades#products_wireless_next_upgrade_time}
  */
  readonly productsWirelessNextUpgradeTime?: string;
  /**
  * The version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_wireless_next_upgrade_to_version_id NetworkFirmwareUpgrades#products_wireless_next_upgrade_to_version_id}
  */
  readonly productsWirelessNextUpgradeToVersionId?: string;
  /**
  * Whether or not the network wants beta firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#products_wireless_participate_in_next_beta_release NetworkFirmwareUpgrades#products_wireless_participate_in_next_beta_release}
  */
  readonly productsWirelessParticipateInNextBetaRelease?: boolean | cdktf.IResolvable;
  /**
  * The timezone for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#timezone NetworkFirmwareUpgrades#timezone}
  */
  readonly timezone?: string;
  /**
  * Day of the week
  *   - Choices: `fri`, `friday`, `mon`, `monday`, `sat`, `saturday`, `sun`, `sunday`, `thu`, `thursday`, `tue`, `tuesday`, `wed`, `wednesday`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#upgrade_window_day_of_week NetworkFirmwareUpgrades#upgrade_window_day_of_week}
  */
  readonly upgradeWindowDayOfWeek?: string;
  /**
  * Hour of the day
  *   - Choices: `0:00`, `10:00`, `11:00`, `12:00`, `13:00`, `14:00`, `15:00`, `16:00`, `17:00`, `18:00`, `19:00`, `1:00`, `20:00`, `21:00`, `22:00`, `23:00`, `2:00`, `3:00`, `4:00`, `5:00`, `6:00`, `7:00`, `8:00`, `9:00`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#upgrade_window_hour_of_day NetworkFirmwareUpgrades#upgrade_window_hour_of_day}
  */
  readonly upgradeWindowHourOfDay?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades meraki_network_firmware_upgrades}
*/
export class NetworkFirmwareUpgrades extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_firmware_upgrades";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkFirmwareUpgrades resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkFirmwareUpgrades to import
  * @param importFromId The id of the existing NetworkFirmwareUpgrades that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkFirmwareUpgrades to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_firmware_upgrades", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_firmware_upgrades meraki_network_firmware_upgrades} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkFirmwareUpgradesConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkFirmwareUpgradesConfig) {
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
    this._productsApplianceNextUpgradeTime = config.productsApplianceNextUpgradeTime;
    this._productsApplianceNextUpgradeToVersionId = config.productsApplianceNextUpgradeToVersionId;
    this._productsApplianceParticipateInNextBetaRelease = config.productsApplianceParticipateInNextBetaRelease;
    this._productsCameraNextUpgradeTime = config.productsCameraNextUpgradeTime;
    this._productsCameraNextUpgradeToVersionId = config.productsCameraNextUpgradeToVersionId;
    this._productsCameraParticipateInNextBetaRelease = config.productsCameraParticipateInNextBetaRelease;
    this._productsCellularGatewayNextUpgradeTime = config.productsCellularGatewayNextUpgradeTime;
    this._productsCellularGatewayNextUpgradeToVersionId = config.productsCellularGatewayNextUpgradeToVersionId;
    this._productsCellularGatewayParticipateInNextBetaRelease = config.productsCellularGatewayParticipateInNextBetaRelease;
    this._productsSecureConnectNextUpgradeTime = config.productsSecureConnectNextUpgradeTime;
    this._productsSecureConnectNextUpgradeToVersionId = config.productsSecureConnectNextUpgradeToVersionId;
    this._productsSecureConnectParticipateInNextBetaRelease = config.productsSecureConnectParticipateInNextBetaRelease;
    this._productsSensorNextUpgradeTime = config.productsSensorNextUpgradeTime;
    this._productsSensorNextUpgradeToVersionId = config.productsSensorNextUpgradeToVersionId;
    this._productsSensorParticipateInNextBetaRelease = config.productsSensorParticipateInNextBetaRelease;
    this._productsSwitchCatalystNextUpgradeTime = config.productsSwitchCatalystNextUpgradeTime;
    this._productsSwitchCatalystNextUpgradeToVersionId = config.productsSwitchCatalystNextUpgradeToVersionId;
    this._productsSwitchCatalystParticipateInNextBetaRelease = config.productsSwitchCatalystParticipateInNextBetaRelease;
    this._productsSwitchNextUpgradeTime = config.productsSwitchNextUpgradeTime;
    this._productsSwitchNextUpgradeToVersionId = config.productsSwitchNextUpgradeToVersionId;
    this._productsSwitchParticipateInNextBetaRelease = config.productsSwitchParticipateInNextBetaRelease;
    this._productsWirelessControllerNextUpgradeTime = config.productsWirelessControllerNextUpgradeTime;
    this._productsWirelessControllerNextUpgradeToVersionId = config.productsWirelessControllerNextUpgradeToVersionId;
    this._productsWirelessControllerParticipateInNextBetaRelease = config.productsWirelessControllerParticipateInNextBetaRelease;
    this._productsWirelessNextUpgradeTime = config.productsWirelessNextUpgradeTime;
    this._productsWirelessNextUpgradeToVersionId = config.productsWirelessNextUpgradeToVersionId;
    this._productsWirelessParticipateInNextBetaRelease = config.productsWirelessParticipateInNextBetaRelease;
    this._timezone = config.timezone;
    this._upgradeWindowDayOfWeek = config.upgradeWindowDayOfWeek;
    this._upgradeWindowHourOfDay = config.upgradeWindowHourOfDay;
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

  // products_appliance_next_upgrade_time - computed: false, optional: true, required: false
  private _productsApplianceNextUpgradeTime?: string; 
  public get productsApplianceNextUpgradeTime() {
    return this.getStringAttribute('products_appliance_next_upgrade_time');
  }
  public set productsApplianceNextUpgradeTime(value: string) {
    this._productsApplianceNextUpgradeTime = value;
  }
  public resetProductsApplianceNextUpgradeTime() {
    this._productsApplianceNextUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsApplianceNextUpgradeTimeInput() {
    return this._productsApplianceNextUpgradeTime;
  }

  // products_appliance_next_upgrade_to_version_id - computed: false, optional: true, required: false
  private _productsApplianceNextUpgradeToVersionId?: string; 
  public get productsApplianceNextUpgradeToVersionId() {
    return this.getStringAttribute('products_appliance_next_upgrade_to_version_id');
  }
  public set productsApplianceNextUpgradeToVersionId(value: string) {
    this._productsApplianceNextUpgradeToVersionId = value;
  }
  public resetProductsApplianceNextUpgradeToVersionId() {
    this._productsApplianceNextUpgradeToVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsApplianceNextUpgradeToVersionIdInput() {
    return this._productsApplianceNextUpgradeToVersionId;
  }

  // products_appliance_participate_in_next_beta_release - computed: false, optional: true, required: false
  private _productsApplianceParticipateInNextBetaRelease?: boolean | cdktf.IResolvable; 
  public get productsApplianceParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_appliance_participate_in_next_beta_release');
  }
  public set productsApplianceParticipateInNextBetaRelease(value: boolean | cdktf.IResolvable) {
    this._productsApplianceParticipateInNextBetaRelease = value;
  }
  public resetProductsApplianceParticipateInNextBetaRelease() {
    this._productsApplianceParticipateInNextBetaRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsApplianceParticipateInNextBetaReleaseInput() {
    return this._productsApplianceParticipateInNextBetaRelease;
  }

  // products_camera_next_upgrade_time - computed: false, optional: true, required: false
  private _productsCameraNextUpgradeTime?: string; 
  public get productsCameraNextUpgradeTime() {
    return this.getStringAttribute('products_camera_next_upgrade_time');
  }
  public set productsCameraNextUpgradeTime(value: string) {
    this._productsCameraNextUpgradeTime = value;
  }
  public resetProductsCameraNextUpgradeTime() {
    this._productsCameraNextUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsCameraNextUpgradeTimeInput() {
    return this._productsCameraNextUpgradeTime;
  }

  // products_camera_next_upgrade_to_version_id - computed: false, optional: true, required: false
  private _productsCameraNextUpgradeToVersionId?: string; 
  public get productsCameraNextUpgradeToVersionId() {
    return this.getStringAttribute('products_camera_next_upgrade_to_version_id');
  }
  public set productsCameraNextUpgradeToVersionId(value: string) {
    this._productsCameraNextUpgradeToVersionId = value;
  }
  public resetProductsCameraNextUpgradeToVersionId() {
    this._productsCameraNextUpgradeToVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsCameraNextUpgradeToVersionIdInput() {
    return this._productsCameraNextUpgradeToVersionId;
  }

  // products_camera_participate_in_next_beta_release - computed: false, optional: true, required: false
  private _productsCameraParticipateInNextBetaRelease?: boolean | cdktf.IResolvable; 
  public get productsCameraParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_camera_participate_in_next_beta_release');
  }
  public set productsCameraParticipateInNextBetaRelease(value: boolean | cdktf.IResolvable) {
    this._productsCameraParticipateInNextBetaRelease = value;
  }
  public resetProductsCameraParticipateInNextBetaRelease() {
    this._productsCameraParticipateInNextBetaRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsCameraParticipateInNextBetaReleaseInput() {
    return this._productsCameraParticipateInNextBetaRelease;
  }

  // products_cellular_gateway_next_upgrade_time - computed: false, optional: true, required: false
  private _productsCellularGatewayNextUpgradeTime?: string; 
  public get productsCellularGatewayNextUpgradeTime() {
    return this.getStringAttribute('products_cellular_gateway_next_upgrade_time');
  }
  public set productsCellularGatewayNextUpgradeTime(value: string) {
    this._productsCellularGatewayNextUpgradeTime = value;
  }
  public resetProductsCellularGatewayNextUpgradeTime() {
    this._productsCellularGatewayNextUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsCellularGatewayNextUpgradeTimeInput() {
    return this._productsCellularGatewayNextUpgradeTime;
  }

  // products_cellular_gateway_next_upgrade_to_version_id - computed: false, optional: true, required: false
  private _productsCellularGatewayNextUpgradeToVersionId?: string; 
  public get productsCellularGatewayNextUpgradeToVersionId() {
    return this.getStringAttribute('products_cellular_gateway_next_upgrade_to_version_id');
  }
  public set productsCellularGatewayNextUpgradeToVersionId(value: string) {
    this._productsCellularGatewayNextUpgradeToVersionId = value;
  }
  public resetProductsCellularGatewayNextUpgradeToVersionId() {
    this._productsCellularGatewayNextUpgradeToVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsCellularGatewayNextUpgradeToVersionIdInput() {
    return this._productsCellularGatewayNextUpgradeToVersionId;
  }

  // products_cellular_gateway_participate_in_next_beta_release - computed: false, optional: true, required: false
  private _productsCellularGatewayParticipateInNextBetaRelease?: boolean | cdktf.IResolvable; 
  public get productsCellularGatewayParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_cellular_gateway_participate_in_next_beta_release');
  }
  public set productsCellularGatewayParticipateInNextBetaRelease(value: boolean | cdktf.IResolvable) {
    this._productsCellularGatewayParticipateInNextBetaRelease = value;
  }
  public resetProductsCellularGatewayParticipateInNextBetaRelease() {
    this._productsCellularGatewayParticipateInNextBetaRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsCellularGatewayParticipateInNextBetaReleaseInput() {
    return this._productsCellularGatewayParticipateInNextBetaRelease;
  }

  // products_secure_connect_next_upgrade_time - computed: false, optional: true, required: false
  private _productsSecureConnectNextUpgradeTime?: string; 
  public get productsSecureConnectNextUpgradeTime() {
    return this.getStringAttribute('products_secure_connect_next_upgrade_time');
  }
  public set productsSecureConnectNextUpgradeTime(value: string) {
    this._productsSecureConnectNextUpgradeTime = value;
  }
  public resetProductsSecureConnectNextUpgradeTime() {
    this._productsSecureConnectNextUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSecureConnectNextUpgradeTimeInput() {
    return this._productsSecureConnectNextUpgradeTime;
  }

  // products_secure_connect_next_upgrade_to_version_id - computed: false, optional: true, required: false
  private _productsSecureConnectNextUpgradeToVersionId?: string; 
  public get productsSecureConnectNextUpgradeToVersionId() {
    return this.getStringAttribute('products_secure_connect_next_upgrade_to_version_id');
  }
  public set productsSecureConnectNextUpgradeToVersionId(value: string) {
    this._productsSecureConnectNextUpgradeToVersionId = value;
  }
  public resetProductsSecureConnectNextUpgradeToVersionId() {
    this._productsSecureConnectNextUpgradeToVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSecureConnectNextUpgradeToVersionIdInput() {
    return this._productsSecureConnectNextUpgradeToVersionId;
  }

  // products_secure_connect_participate_in_next_beta_release - computed: false, optional: true, required: false
  private _productsSecureConnectParticipateInNextBetaRelease?: boolean | cdktf.IResolvable; 
  public get productsSecureConnectParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_secure_connect_participate_in_next_beta_release');
  }
  public set productsSecureConnectParticipateInNextBetaRelease(value: boolean | cdktf.IResolvable) {
    this._productsSecureConnectParticipateInNextBetaRelease = value;
  }
  public resetProductsSecureConnectParticipateInNextBetaRelease() {
    this._productsSecureConnectParticipateInNextBetaRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSecureConnectParticipateInNextBetaReleaseInput() {
    return this._productsSecureConnectParticipateInNextBetaRelease;
  }

  // products_sensor_next_upgrade_time - computed: false, optional: true, required: false
  private _productsSensorNextUpgradeTime?: string; 
  public get productsSensorNextUpgradeTime() {
    return this.getStringAttribute('products_sensor_next_upgrade_time');
  }
  public set productsSensorNextUpgradeTime(value: string) {
    this._productsSensorNextUpgradeTime = value;
  }
  public resetProductsSensorNextUpgradeTime() {
    this._productsSensorNextUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSensorNextUpgradeTimeInput() {
    return this._productsSensorNextUpgradeTime;
  }

  // products_sensor_next_upgrade_to_version_id - computed: false, optional: true, required: false
  private _productsSensorNextUpgradeToVersionId?: string; 
  public get productsSensorNextUpgradeToVersionId() {
    return this.getStringAttribute('products_sensor_next_upgrade_to_version_id');
  }
  public set productsSensorNextUpgradeToVersionId(value: string) {
    this._productsSensorNextUpgradeToVersionId = value;
  }
  public resetProductsSensorNextUpgradeToVersionId() {
    this._productsSensorNextUpgradeToVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSensorNextUpgradeToVersionIdInput() {
    return this._productsSensorNextUpgradeToVersionId;
  }

  // products_sensor_participate_in_next_beta_release - computed: false, optional: true, required: false
  private _productsSensorParticipateInNextBetaRelease?: boolean | cdktf.IResolvable; 
  public get productsSensorParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_sensor_participate_in_next_beta_release');
  }
  public set productsSensorParticipateInNextBetaRelease(value: boolean | cdktf.IResolvable) {
    this._productsSensorParticipateInNextBetaRelease = value;
  }
  public resetProductsSensorParticipateInNextBetaRelease() {
    this._productsSensorParticipateInNextBetaRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSensorParticipateInNextBetaReleaseInput() {
    return this._productsSensorParticipateInNextBetaRelease;
  }

  // products_switch_catalyst_next_upgrade_time - computed: false, optional: true, required: false
  private _productsSwitchCatalystNextUpgradeTime?: string; 
  public get productsSwitchCatalystNextUpgradeTime() {
    return this.getStringAttribute('products_switch_catalyst_next_upgrade_time');
  }
  public set productsSwitchCatalystNextUpgradeTime(value: string) {
    this._productsSwitchCatalystNextUpgradeTime = value;
  }
  public resetProductsSwitchCatalystNextUpgradeTime() {
    this._productsSwitchCatalystNextUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSwitchCatalystNextUpgradeTimeInput() {
    return this._productsSwitchCatalystNextUpgradeTime;
  }

  // products_switch_catalyst_next_upgrade_to_version_id - computed: false, optional: true, required: false
  private _productsSwitchCatalystNextUpgradeToVersionId?: string; 
  public get productsSwitchCatalystNextUpgradeToVersionId() {
    return this.getStringAttribute('products_switch_catalyst_next_upgrade_to_version_id');
  }
  public set productsSwitchCatalystNextUpgradeToVersionId(value: string) {
    this._productsSwitchCatalystNextUpgradeToVersionId = value;
  }
  public resetProductsSwitchCatalystNextUpgradeToVersionId() {
    this._productsSwitchCatalystNextUpgradeToVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSwitchCatalystNextUpgradeToVersionIdInput() {
    return this._productsSwitchCatalystNextUpgradeToVersionId;
  }

  // products_switch_catalyst_participate_in_next_beta_release - computed: false, optional: true, required: false
  private _productsSwitchCatalystParticipateInNextBetaRelease?: boolean | cdktf.IResolvable; 
  public get productsSwitchCatalystParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_switch_catalyst_participate_in_next_beta_release');
  }
  public set productsSwitchCatalystParticipateInNextBetaRelease(value: boolean | cdktf.IResolvable) {
    this._productsSwitchCatalystParticipateInNextBetaRelease = value;
  }
  public resetProductsSwitchCatalystParticipateInNextBetaRelease() {
    this._productsSwitchCatalystParticipateInNextBetaRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSwitchCatalystParticipateInNextBetaReleaseInput() {
    return this._productsSwitchCatalystParticipateInNextBetaRelease;
  }

  // products_switch_next_upgrade_time - computed: false, optional: true, required: false
  private _productsSwitchNextUpgradeTime?: string; 
  public get productsSwitchNextUpgradeTime() {
    return this.getStringAttribute('products_switch_next_upgrade_time');
  }
  public set productsSwitchNextUpgradeTime(value: string) {
    this._productsSwitchNextUpgradeTime = value;
  }
  public resetProductsSwitchNextUpgradeTime() {
    this._productsSwitchNextUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSwitchNextUpgradeTimeInput() {
    return this._productsSwitchNextUpgradeTime;
  }

  // products_switch_next_upgrade_to_version_id - computed: false, optional: true, required: false
  private _productsSwitchNextUpgradeToVersionId?: string; 
  public get productsSwitchNextUpgradeToVersionId() {
    return this.getStringAttribute('products_switch_next_upgrade_to_version_id');
  }
  public set productsSwitchNextUpgradeToVersionId(value: string) {
    this._productsSwitchNextUpgradeToVersionId = value;
  }
  public resetProductsSwitchNextUpgradeToVersionId() {
    this._productsSwitchNextUpgradeToVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSwitchNextUpgradeToVersionIdInput() {
    return this._productsSwitchNextUpgradeToVersionId;
  }

  // products_switch_participate_in_next_beta_release - computed: false, optional: true, required: false
  private _productsSwitchParticipateInNextBetaRelease?: boolean | cdktf.IResolvable; 
  public get productsSwitchParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_switch_participate_in_next_beta_release');
  }
  public set productsSwitchParticipateInNextBetaRelease(value: boolean | cdktf.IResolvable) {
    this._productsSwitchParticipateInNextBetaRelease = value;
  }
  public resetProductsSwitchParticipateInNextBetaRelease() {
    this._productsSwitchParticipateInNextBetaRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsSwitchParticipateInNextBetaReleaseInput() {
    return this._productsSwitchParticipateInNextBetaRelease;
  }

  // products_wireless_controller_next_upgrade_time - computed: false, optional: true, required: false
  private _productsWirelessControllerNextUpgradeTime?: string; 
  public get productsWirelessControllerNextUpgradeTime() {
    return this.getStringAttribute('products_wireless_controller_next_upgrade_time');
  }
  public set productsWirelessControllerNextUpgradeTime(value: string) {
    this._productsWirelessControllerNextUpgradeTime = value;
  }
  public resetProductsWirelessControllerNextUpgradeTime() {
    this._productsWirelessControllerNextUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsWirelessControllerNextUpgradeTimeInput() {
    return this._productsWirelessControllerNextUpgradeTime;
  }

  // products_wireless_controller_next_upgrade_to_version_id - computed: false, optional: true, required: false
  private _productsWirelessControllerNextUpgradeToVersionId?: string; 
  public get productsWirelessControllerNextUpgradeToVersionId() {
    return this.getStringAttribute('products_wireless_controller_next_upgrade_to_version_id');
  }
  public set productsWirelessControllerNextUpgradeToVersionId(value: string) {
    this._productsWirelessControllerNextUpgradeToVersionId = value;
  }
  public resetProductsWirelessControllerNextUpgradeToVersionId() {
    this._productsWirelessControllerNextUpgradeToVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsWirelessControllerNextUpgradeToVersionIdInput() {
    return this._productsWirelessControllerNextUpgradeToVersionId;
  }

  // products_wireless_controller_participate_in_next_beta_release - computed: false, optional: true, required: false
  private _productsWirelessControllerParticipateInNextBetaRelease?: boolean | cdktf.IResolvable; 
  public get productsWirelessControllerParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_wireless_controller_participate_in_next_beta_release');
  }
  public set productsWirelessControllerParticipateInNextBetaRelease(value: boolean | cdktf.IResolvable) {
    this._productsWirelessControllerParticipateInNextBetaRelease = value;
  }
  public resetProductsWirelessControllerParticipateInNextBetaRelease() {
    this._productsWirelessControllerParticipateInNextBetaRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsWirelessControllerParticipateInNextBetaReleaseInput() {
    return this._productsWirelessControllerParticipateInNextBetaRelease;
  }

  // products_wireless_next_upgrade_time - computed: false, optional: true, required: false
  private _productsWirelessNextUpgradeTime?: string; 
  public get productsWirelessNextUpgradeTime() {
    return this.getStringAttribute('products_wireless_next_upgrade_time');
  }
  public set productsWirelessNextUpgradeTime(value: string) {
    this._productsWirelessNextUpgradeTime = value;
  }
  public resetProductsWirelessNextUpgradeTime() {
    this._productsWirelessNextUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsWirelessNextUpgradeTimeInput() {
    return this._productsWirelessNextUpgradeTime;
  }

  // products_wireless_next_upgrade_to_version_id - computed: false, optional: true, required: false
  private _productsWirelessNextUpgradeToVersionId?: string; 
  public get productsWirelessNextUpgradeToVersionId() {
    return this.getStringAttribute('products_wireless_next_upgrade_to_version_id');
  }
  public set productsWirelessNextUpgradeToVersionId(value: string) {
    this._productsWirelessNextUpgradeToVersionId = value;
  }
  public resetProductsWirelessNextUpgradeToVersionId() {
    this._productsWirelessNextUpgradeToVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsWirelessNextUpgradeToVersionIdInput() {
    return this._productsWirelessNextUpgradeToVersionId;
  }

  // products_wireless_participate_in_next_beta_release - computed: false, optional: true, required: false
  private _productsWirelessParticipateInNextBetaRelease?: boolean | cdktf.IResolvable; 
  public get productsWirelessParticipateInNextBetaRelease() {
    return this.getBooleanAttribute('products_wireless_participate_in_next_beta_release');
  }
  public set productsWirelessParticipateInNextBetaRelease(value: boolean | cdktf.IResolvable) {
    this._productsWirelessParticipateInNextBetaRelease = value;
  }
  public resetProductsWirelessParticipateInNextBetaRelease() {
    this._productsWirelessParticipateInNextBetaRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsWirelessParticipateInNextBetaReleaseInput() {
    return this._productsWirelessParticipateInNextBetaRelease;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // upgrade_window_day_of_week - computed: false, optional: true, required: false
  private _upgradeWindowDayOfWeek?: string; 
  public get upgradeWindowDayOfWeek() {
    return this.getStringAttribute('upgrade_window_day_of_week');
  }
  public set upgradeWindowDayOfWeek(value: string) {
    this._upgradeWindowDayOfWeek = value;
  }
  public resetUpgradeWindowDayOfWeek() {
    this._upgradeWindowDayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeWindowDayOfWeekInput() {
    return this._upgradeWindowDayOfWeek;
  }

  // upgrade_window_hour_of_day - computed: false, optional: true, required: false
  private _upgradeWindowHourOfDay?: string; 
  public get upgradeWindowHourOfDay() {
    return this.getStringAttribute('upgrade_window_hour_of_day');
  }
  public set upgradeWindowHourOfDay(value: string) {
    this._upgradeWindowHourOfDay = value;
  }
  public resetUpgradeWindowHourOfDay() {
    this._upgradeWindowHourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeWindowHourOfDayInput() {
    return this._upgradeWindowHourOfDay;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      products_appliance_next_upgrade_time: cdktf.stringToTerraform(this._productsApplianceNextUpgradeTime),
      products_appliance_next_upgrade_to_version_id: cdktf.stringToTerraform(this._productsApplianceNextUpgradeToVersionId),
      products_appliance_participate_in_next_beta_release: cdktf.booleanToTerraform(this._productsApplianceParticipateInNextBetaRelease),
      products_camera_next_upgrade_time: cdktf.stringToTerraform(this._productsCameraNextUpgradeTime),
      products_camera_next_upgrade_to_version_id: cdktf.stringToTerraform(this._productsCameraNextUpgradeToVersionId),
      products_camera_participate_in_next_beta_release: cdktf.booleanToTerraform(this._productsCameraParticipateInNextBetaRelease),
      products_cellular_gateway_next_upgrade_time: cdktf.stringToTerraform(this._productsCellularGatewayNextUpgradeTime),
      products_cellular_gateway_next_upgrade_to_version_id: cdktf.stringToTerraform(this._productsCellularGatewayNextUpgradeToVersionId),
      products_cellular_gateway_participate_in_next_beta_release: cdktf.booleanToTerraform(this._productsCellularGatewayParticipateInNextBetaRelease),
      products_secure_connect_next_upgrade_time: cdktf.stringToTerraform(this._productsSecureConnectNextUpgradeTime),
      products_secure_connect_next_upgrade_to_version_id: cdktf.stringToTerraform(this._productsSecureConnectNextUpgradeToVersionId),
      products_secure_connect_participate_in_next_beta_release: cdktf.booleanToTerraform(this._productsSecureConnectParticipateInNextBetaRelease),
      products_sensor_next_upgrade_time: cdktf.stringToTerraform(this._productsSensorNextUpgradeTime),
      products_sensor_next_upgrade_to_version_id: cdktf.stringToTerraform(this._productsSensorNextUpgradeToVersionId),
      products_sensor_participate_in_next_beta_release: cdktf.booleanToTerraform(this._productsSensorParticipateInNextBetaRelease),
      products_switch_catalyst_next_upgrade_time: cdktf.stringToTerraform(this._productsSwitchCatalystNextUpgradeTime),
      products_switch_catalyst_next_upgrade_to_version_id: cdktf.stringToTerraform(this._productsSwitchCatalystNextUpgradeToVersionId),
      products_switch_catalyst_participate_in_next_beta_release: cdktf.booleanToTerraform(this._productsSwitchCatalystParticipateInNextBetaRelease),
      products_switch_next_upgrade_time: cdktf.stringToTerraform(this._productsSwitchNextUpgradeTime),
      products_switch_next_upgrade_to_version_id: cdktf.stringToTerraform(this._productsSwitchNextUpgradeToVersionId),
      products_switch_participate_in_next_beta_release: cdktf.booleanToTerraform(this._productsSwitchParticipateInNextBetaRelease),
      products_wireless_controller_next_upgrade_time: cdktf.stringToTerraform(this._productsWirelessControllerNextUpgradeTime),
      products_wireless_controller_next_upgrade_to_version_id: cdktf.stringToTerraform(this._productsWirelessControllerNextUpgradeToVersionId),
      products_wireless_controller_participate_in_next_beta_release: cdktf.booleanToTerraform(this._productsWirelessControllerParticipateInNextBetaRelease),
      products_wireless_next_upgrade_time: cdktf.stringToTerraform(this._productsWirelessNextUpgradeTime),
      products_wireless_next_upgrade_to_version_id: cdktf.stringToTerraform(this._productsWirelessNextUpgradeToVersionId),
      products_wireless_participate_in_next_beta_release: cdktf.booleanToTerraform(this._productsWirelessParticipateInNextBetaRelease),
      timezone: cdktf.stringToTerraform(this._timezone),
      upgrade_window_day_of_week: cdktf.stringToTerraform(this._upgradeWindowDayOfWeek),
      upgrade_window_hour_of_day: cdktf.stringToTerraform(this._upgradeWindowHourOfDay),
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
      products_appliance_next_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._productsApplianceNextUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_appliance_next_upgrade_to_version_id: {
        value: cdktf.stringToHclTerraform(this._productsApplianceNextUpgradeToVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_appliance_participate_in_next_beta_release: {
        value: cdktf.booleanToHclTerraform(this._productsApplianceParticipateInNextBetaRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      products_camera_next_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._productsCameraNextUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_camera_next_upgrade_to_version_id: {
        value: cdktf.stringToHclTerraform(this._productsCameraNextUpgradeToVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_camera_participate_in_next_beta_release: {
        value: cdktf.booleanToHclTerraform(this._productsCameraParticipateInNextBetaRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      products_cellular_gateway_next_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._productsCellularGatewayNextUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_cellular_gateway_next_upgrade_to_version_id: {
        value: cdktf.stringToHclTerraform(this._productsCellularGatewayNextUpgradeToVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_cellular_gateway_participate_in_next_beta_release: {
        value: cdktf.booleanToHclTerraform(this._productsCellularGatewayParticipateInNextBetaRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      products_secure_connect_next_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._productsSecureConnectNextUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_secure_connect_next_upgrade_to_version_id: {
        value: cdktf.stringToHclTerraform(this._productsSecureConnectNextUpgradeToVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_secure_connect_participate_in_next_beta_release: {
        value: cdktf.booleanToHclTerraform(this._productsSecureConnectParticipateInNextBetaRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      products_sensor_next_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._productsSensorNextUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_sensor_next_upgrade_to_version_id: {
        value: cdktf.stringToHclTerraform(this._productsSensorNextUpgradeToVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_sensor_participate_in_next_beta_release: {
        value: cdktf.booleanToHclTerraform(this._productsSensorParticipateInNextBetaRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      products_switch_catalyst_next_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._productsSwitchCatalystNextUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_switch_catalyst_next_upgrade_to_version_id: {
        value: cdktf.stringToHclTerraform(this._productsSwitchCatalystNextUpgradeToVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_switch_catalyst_participate_in_next_beta_release: {
        value: cdktf.booleanToHclTerraform(this._productsSwitchCatalystParticipateInNextBetaRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      products_switch_next_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._productsSwitchNextUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_switch_next_upgrade_to_version_id: {
        value: cdktf.stringToHclTerraform(this._productsSwitchNextUpgradeToVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_switch_participate_in_next_beta_release: {
        value: cdktf.booleanToHclTerraform(this._productsSwitchParticipateInNextBetaRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      products_wireless_controller_next_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._productsWirelessControllerNextUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_wireless_controller_next_upgrade_to_version_id: {
        value: cdktf.stringToHclTerraform(this._productsWirelessControllerNextUpgradeToVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_wireless_controller_participate_in_next_beta_release: {
        value: cdktf.booleanToHclTerraform(this._productsWirelessControllerParticipateInNextBetaRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      products_wireless_next_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._productsWirelessNextUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_wireless_next_upgrade_to_version_id: {
        value: cdktf.stringToHclTerraform(this._productsWirelessNextUpgradeToVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products_wireless_participate_in_next_beta_release: {
        value: cdktf.booleanToHclTerraform(this._productsWirelessParticipateInNextBetaRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_window_day_of_week: {
        value: cdktf.stringToHclTerraform(this._upgradeWindowDayOfWeek),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_window_hour_of_day: {
        value: cdktf.stringToHclTerraform(this._upgradeWindowHourOfDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
