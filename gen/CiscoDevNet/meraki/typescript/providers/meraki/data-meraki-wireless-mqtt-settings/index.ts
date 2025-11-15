// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_mqtt_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessMqttSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_mqtt_settings#network_id DataMerakiWirelessMqttSettings#network_id}
  */
  readonly networkId: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_mqtt_settings#organization_id DataMerakiWirelessMqttSettings#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_mqtt_settings meraki_wireless_mqtt_settings}
*/
export class DataMerakiWirelessMqttSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_mqtt_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessMqttSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessMqttSettings to import
  * @param importFromId The id of the existing DataMerakiWirelessMqttSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_mqtt_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessMqttSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_mqtt_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/wireless_mqtt_settings meraki_wireless_mqtt_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessMqttSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessMqttSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_mqtt_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ble_allow_lists_macs - computed: true, optional: false, required: false
  public get bleAllowListsMacs() {
    return this.getListAttribute('ble_allow_lists_macs');
  }

  // ble_allow_lists_uuids - computed: true, optional: false, required: false
  public get bleAllowListsUuids() {
    return this.getListAttribute('ble_allow_lists_uuids');
  }

  // ble_enabled - computed: true, optional: false, required: false
  public get bleEnabled() {
    return this.getBooleanAttribute('ble_enabled');
  }

  // ble_flush_frequency - computed: true, optional: false, required: false
  public get bleFlushFrequency() {
    return this.getNumberAttribute('ble_flush_frequency');
  }

  // ble_hysteresis_enabled - computed: true, optional: false, required: false
  public get bleHysteresisEnabled() {
    return this.getBooleanAttribute('ble_hysteresis_enabled');
  }

  // ble_hysteresis_threshold - computed: true, optional: false, required: false
  public get bleHysteresisThreshold() {
    return this.getNumberAttribute('ble_hysteresis_threshold');
  }

  // ble_type - computed: true, optional: false, required: false
  public get bleType() {
    return this.getStringAttribute('ble_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mqtt_broker_name - computed: true, optional: false, required: false
  public get mqttBrokerName() {
    return this.getStringAttribute('mqtt_broker_name');
  }

  // mqtt_enabled - computed: true, optional: false, required: false
  public get mqttEnabled() {
    return this.getBooleanAttribute('mqtt_enabled');
  }

  // mqtt_message_fields - computed: true, optional: false, required: false
  public get mqttMessageFields() {
    return this.getListAttribute('mqtt_message_fields');
  }

  // mqtt_publishing_frequency - computed: true, optional: false, required: false
  public get mqttPublishingFrequency() {
    return this.getNumberAttribute('mqtt_publishing_frequency');
  }

  // mqtt_publishing_qos - computed: true, optional: false, required: false
  public get mqttPublishingQos() {
    return this.getNumberAttribute('mqtt_publishing_qos');
  }

  // mqtt_topic - computed: true, optional: false, required: false
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // wifi_allow_lists_macs - computed: true, optional: false, required: false
  public get wifiAllowListsMacs() {
    return this.getListAttribute('wifi_allow_lists_macs');
  }

  // wifi_enabled - computed: true, optional: false, required: false
  public get wifiEnabled() {
    return this.getBooleanAttribute('wifi_enabled');
  }

  // wifi_flush_frequency - computed: true, optional: false, required: false
  public get wifiFlushFrequency() {
    return this.getNumberAttribute('wifi_flush_frequency');
  }

  // wifi_hysteresis_enabled - computed: true, optional: false, required: false
  public get wifiHysteresisEnabled() {
    return this.getBooleanAttribute('wifi_hysteresis_enabled');
  }

  // wifi_hysteresis_threshold - computed: true, optional: false, required: false
  public get wifiHysteresisThreshold() {
    return this.getNumberAttribute('wifi_hysteresis_threshold');
  }

  // wifi_type - computed: true, optional: false, required: false
  public get wifiType() {
    return this.getStringAttribute('wifi_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
