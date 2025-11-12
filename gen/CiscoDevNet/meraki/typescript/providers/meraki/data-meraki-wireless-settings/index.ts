// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_settings#network_id DataMerakiWirelessSettings#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_settings meraki_wireless_settings}
*/
export class DataMerakiWirelessSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessSettings to import
  * @param importFromId The id of the existing DataMerakiWirelessSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_settings meraki_wireless_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
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

  // ipv6_bridge_enabled - computed: true, optional: false, required: false
  public get ipv6BridgeEnabled() {
    return this.getBooleanAttribute('ipv6_bridge_enabled');
  }

  // led_lights_on - computed: true, optional: false, required: false
  public get ledLightsOn() {
    return this.getBooleanAttribute('led_lights_on');
  }

  // location_analytics_enabled - computed: true, optional: false, required: false
  public get locationAnalyticsEnabled() {
    return this.getBooleanAttribute('location_analytics_enabled');
  }

  // meshing_enabled - computed: true, optional: false, required: false
  public get meshingEnabled() {
    return this.getBooleanAttribute('meshing_enabled');
  }

  // named_vlans_pool_dhcp_monitoring_duration - computed: true, optional: false, required: false
  public get namedVlansPoolDhcpMonitoringDuration() {
    return this.getNumberAttribute('named_vlans_pool_dhcp_monitoring_duration');
  }

  // named_vlans_pool_dhcp_monitoring_enabled - computed: true, optional: false, required: false
  public get namedVlansPoolDhcpMonitoringEnabled() {
    return this.getBooleanAttribute('named_vlans_pool_dhcp_monitoring_enabled');
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

  // upgrade_strategy - computed: true, optional: false, required: false
  public get upgradeStrategy() {
    return this.getStringAttribute('upgrade_strategy');
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
