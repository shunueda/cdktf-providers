// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings#ipv6_bridge_enabled WirelessSettings#ipv6_bridge_enabled}
  */
  readonly ipv6BridgeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Toggle for enabling or disabling LED lights on all APs in the network (making them run dark)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings#led_lights_on WirelessSettings#led_lights_on}
  */
  readonly ledLightsOn?: boolean | cdktf.IResolvable;
  /**
  * Toggle for enabling or disabling location analytics for your network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings#location_analytics_enabled WirelessSettings#location_analytics_enabled}
  */
  readonly locationAnalyticsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Toggle for enabling or disabling meshing in a network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings#meshing_enabled WirelessSettings#meshing_enabled}
  */
  readonly meshingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The duration in minutes that devices will refrain from using dirty VLANs before adding them back to the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings#named_vlans_pool_dhcp_monitoring_duration WirelessSettings#named_vlans_pool_dhcp_monitoring_duration}
  */
  readonly namedVlansPoolDhcpMonitoringDuration?: number;
  /**
  * Whether or not devices using named VLAN pools should remove dirty VLANs from the pool, thereby preventing clients from being assigned to VLANs where they would be unable to obtain an IP address via DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings#named_vlans_pool_dhcp_monitoring_enabled WirelessSettings#named_vlans_pool_dhcp_monitoring_enabled}
  */
  readonly namedVlansPoolDhcpMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings#network_id WirelessSettings#network_id}
  */
  readonly networkId: string;
  /**
  * The default strategy that network devices will use to perform an upgrade. Requires firmware version MR 26.8 or higher.
  *   - Choices: `minimizeClientDowntime`, `minimizeUpgradeTime`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings#upgrade_strategy WirelessSettings#upgrade_strategy}
  */
  readonly upgradeStrategy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings meraki_wireless_settings}
*/
export class WirelessSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSettings to import
  * @param importFromId The id of the existing WirelessSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_settings meraki_wireless_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_settings',
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
    this._ipv6BridgeEnabled = config.ipv6BridgeEnabled;
    this._ledLightsOn = config.ledLightsOn;
    this._locationAnalyticsEnabled = config.locationAnalyticsEnabled;
    this._meshingEnabled = config.meshingEnabled;
    this._namedVlansPoolDhcpMonitoringDuration = config.namedVlansPoolDhcpMonitoringDuration;
    this._namedVlansPoolDhcpMonitoringEnabled = config.namedVlansPoolDhcpMonitoringEnabled;
    this._networkId = config.networkId;
    this._upgradeStrategy = config.upgradeStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_bridge_enabled - computed: false, optional: true, required: false
  private _ipv6BridgeEnabled?: boolean | cdktf.IResolvable; 
  public get ipv6BridgeEnabled() {
    return this.getBooleanAttribute('ipv6_bridge_enabled');
  }
  public set ipv6BridgeEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv6BridgeEnabled = value;
  }
  public resetIpv6BridgeEnabled() {
    this._ipv6BridgeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6BridgeEnabledInput() {
    return this._ipv6BridgeEnabled;
  }

  // led_lights_on - computed: false, optional: true, required: false
  private _ledLightsOn?: boolean | cdktf.IResolvable; 
  public get ledLightsOn() {
    return this.getBooleanAttribute('led_lights_on');
  }
  public set ledLightsOn(value: boolean | cdktf.IResolvable) {
    this._ledLightsOn = value;
  }
  public resetLedLightsOn() {
    this._ledLightsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ledLightsOnInput() {
    return this._ledLightsOn;
  }

  // location_analytics_enabled - computed: false, optional: true, required: false
  private _locationAnalyticsEnabled?: boolean | cdktf.IResolvable; 
  public get locationAnalyticsEnabled() {
    return this.getBooleanAttribute('location_analytics_enabled');
  }
  public set locationAnalyticsEnabled(value: boolean | cdktf.IResolvable) {
    this._locationAnalyticsEnabled = value;
  }
  public resetLocationAnalyticsEnabled() {
    this._locationAnalyticsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationAnalyticsEnabledInput() {
    return this._locationAnalyticsEnabled;
  }

  // meshing_enabled - computed: false, optional: true, required: false
  private _meshingEnabled?: boolean | cdktf.IResolvable; 
  public get meshingEnabled() {
    return this.getBooleanAttribute('meshing_enabled');
  }
  public set meshingEnabled(value: boolean | cdktf.IResolvable) {
    this._meshingEnabled = value;
  }
  public resetMeshingEnabled() {
    this._meshingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshingEnabledInput() {
    return this._meshingEnabled;
  }

  // named_vlans_pool_dhcp_monitoring_duration - computed: false, optional: true, required: false
  private _namedVlansPoolDhcpMonitoringDuration?: number; 
  public get namedVlansPoolDhcpMonitoringDuration() {
    return this.getNumberAttribute('named_vlans_pool_dhcp_monitoring_duration');
  }
  public set namedVlansPoolDhcpMonitoringDuration(value: number) {
    this._namedVlansPoolDhcpMonitoringDuration = value;
  }
  public resetNamedVlansPoolDhcpMonitoringDuration() {
    this._namedVlansPoolDhcpMonitoringDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedVlansPoolDhcpMonitoringDurationInput() {
    return this._namedVlansPoolDhcpMonitoringDuration;
  }

  // named_vlans_pool_dhcp_monitoring_enabled - computed: false, optional: true, required: false
  private _namedVlansPoolDhcpMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get namedVlansPoolDhcpMonitoringEnabled() {
    return this.getBooleanAttribute('named_vlans_pool_dhcp_monitoring_enabled');
  }
  public set namedVlansPoolDhcpMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._namedVlansPoolDhcpMonitoringEnabled = value;
  }
  public resetNamedVlansPoolDhcpMonitoringEnabled() {
    this._namedVlansPoolDhcpMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedVlansPoolDhcpMonitoringEnabledInput() {
    return this._namedVlansPoolDhcpMonitoringEnabled;
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

  // upgrade_strategy - computed: false, optional: true, required: false
  private _upgradeStrategy?: string; 
  public get upgradeStrategy() {
    return this.getStringAttribute('upgrade_strategy');
  }
  public set upgradeStrategy(value: string) {
    this._upgradeStrategy = value;
  }
  public resetUpgradeStrategy() {
    this._upgradeStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeStrategyInput() {
    return this._upgradeStrategy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ipv6_bridge_enabled: cdktf.booleanToTerraform(this._ipv6BridgeEnabled),
      led_lights_on: cdktf.booleanToTerraform(this._ledLightsOn),
      location_analytics_enabled: cdktf.booleanToTerraform(this._locationAnalyticsEnabled),
      meshing_enabled: cdktf.booleanToTerraform(this._meshingEnabled),
      named_vlans_pool_dhcp_monitoring_duration: cdktf.numberToTerraform(this._namedVlansPoolDhcpMonitoringDuration),
      named_vlans_pool_dhcp_monitoring_enabled: cdktf.booleanToTerraform(this._namedVlansPoolDhcpMonitoringEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      upgrade_strategy: cdktf.stringToTerraform(this._upgradeStrategy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ipv6_bridge_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv6BridgeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      led_lights_on: {
        value: cdktf.booleanToHclTerraform(this._ledLightsOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location_analytics_enabled: {
        value: cdktf.booleanToHclTerraform(this._locationAnalyticsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      meshing_enabled: {
        value: cdktf.booleanToHclTerraform(this._meshingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      named_vlans_pool_dhcp_monitoring_duration: {
        value: cdktf.numberToHclTerraform(this._namedVlansPoolDhcpMonitoringDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      named_vlans_pool_dhcp_monitoring_enabled: {
        value: cdktf.booleanToHclTerraform(this._namedVlansPoolDhcpMonitoringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_strategy: {
        value: cdktf.stringToHclTerraform(this._upgradeStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
