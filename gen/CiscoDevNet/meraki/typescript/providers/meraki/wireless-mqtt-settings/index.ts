// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessMqttSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allowed MAC List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#ble_allow_lists_macs WirelessMqttSettings#ble_allow_lists_macs}
  */
  readonly bleAllowListsMacs?: string[];
  /**
  * Allowed UUID List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#ble_allow_lists_uuids WirelessMqttSettings#ble_allow_lists_uuids}
  */
  readonly bleAllowListsUuids?: string[];
  /**
  * BLE Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#ble_enabled WirelessMqttSettings#ble_enabled}
  */
  readonly bleEnabled?: boolean | cdktf.IResolvable;
  /**
  * BLE Flush frequency in seconds. Will be between 1 and 2147483647. Default is 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#ble_flush_frequency WirelessMqttSettings#ble_flush_frequency}
  */
  readonly bleFlushFrequency?: number;
  /**
  * BLE Hysteresis Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#ble_hysteresis_enabled WirelessMqttSettings#ble_hysteresis_enabled}
  */
  readonly bleHysteresisEnabled?: boolean | cdktf.IResolvable;
  /**
  * BLE Threshold. Will be between 1 and 2147483647. Default is 1 second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#ble_hysteresis_threshold WirelessMqttSettings#ble_hysteresis_threshold}
  */
  readonly bleHysteresisThreshold?: number;
  /**
  * BLE type of clients to publish telemetry. Valid types are: All, iBeacon, Eddystone, Unknown
  *   - Choices: `All`, `Eddystone`, `iBeacon`, `Unknown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#ble_type WirelessMqttSettings#ble_type}
  */
  readonly bleType?: string;
  /**
  * Broker Config Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#mqtt_broker_name WirelessMqttSettings#mqtt_broker_name}
  */
  readonly mqttBrokerName?: string;
  /**
  * MQTT Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#mqtt_enabled WirelessMqttSettings#mqtt_enabled}
  */
  readonly mqttEnabled?: boolean | cdktf.IResolvable;
  /**
  * Select fields to populate in MQTT messages. Valid types are: RSSI, AP MAC address, Client MAC address, Timestamp, Radio, Network ID, Beacon type, Raw payload, Client UUID, Client major value, Client minor value, Signal power, Band, Slot ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#mqtt_message_fields WirelessMqttSettings#mqtt_message_fields}
  */
  readonly mqttMessageFields?: string[];
  /**
  * MQTT Publishing Frequency in seconds. Will be between 1 and 2147483647. Default is 1 second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#mqtt_publishing_frequency WirelessMqttSettings#mqtt_publishing_frequency}
  */
  readonly mqttPublishingFrequency?: number;
  /**
  * MQTT Publishing QoS. Valid types are: 0, 1, 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#mqtt_publishing_qos WirelessMqttSettings#mqtt_publishing_qos}
  */
  readonly mqttPublishingQos?: number;
  /**
  * MQTT Topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#mqtt_topic WirelessMqttSettings#mqtt_topic}
  */
  readonly mqttTopic?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#network_id WirelessMqttSettings#network_id}
  */
  readonly networkId: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#organization_id WirelessMqttSettings#organization_id}
  */
  readonly organizationId: string;
  /**
  * Allowed MAC List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#wifi_allow_lists_macs WirelessMqttSettings#wifi_allow_lists_macs}
  */
  readonly wifiAllowListsMacs?: string[];
  /**
  * Wi-Fi Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#wifi_enabled WirelessMqttSettings#wifi_enabled}
  */
  readonly wifiEnabled?: boolean | cdktf.IResolvable;
  /**
  * Wi-Fi Flush frequency in seconds. Will be between 1 and 2147483647. Default is 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#wifi_flush_frequency WirelessMqttSettings#wifi_flush_frequency}
  */
  readonly wifiFlushFrequency?: number;
  /**
  * Wi-Fi Hysteresis Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#wifi_hysteresis_enabled WirelessMqttSettings#wifi_hysteresis_enabled}
  */
  readonly wifiHysteresisEnabled?: boolean | cdktf.IResolvable;
  /**
  * Wi-Fi Threshold. Will be between 1 and 2147483647. Default is 1 second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#wifi_hysteresis_threshold WirelessMqttSettings#wifi_hysteresis_threshold}
  */
  readonly wifiHysteresisThreshold?: number;
  /**
  * Wi-Fi client type. Valid types are: Visible, Associated
  *   - Choices: `Associated`, `Visible`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#wifi_type WirelessMqttSettings#wifi_type}
  */
  readonly wifiType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings meraki_wireless_mqtt_settings}
*/
export class WirelessMqttSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_mqtt_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessMqttSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessMqttSettings to import
  * @param importFromId The id of the existing WirelessMqttSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessMqttSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_mqtt_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_mqtt_settings meraki_wireless_mqtt_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessMqttSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessMqttSettingsConfig) {
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
    this._bleAllowListsMacs = config.bleAllowListsMacs;
    this._bleAllowListsUuids = config.bleAllowListsUuids;
    this._bleEnabled = config.bleEnabled;
    this._bleFlushFrequency = config.bleFlushFrequency;
    this._bleHysteresisEnabled = config.bleHysteresisEnabled;
    this._bleHysteresisThreshold = config.bleHysteresisThreshold;
    this._bleType = config.bleType;
    this._mqttBrokerName = config.mqttBrokerName;
    this._mqttEnabled = config.mqttEnabled;
    this._mqttMessageFields = config.mqttMessageFields;
    this._mqttPublishingFrequency = config.mqttPublishingFrequency;
    this._mqttPublishingQos = config.mqttPublishingQos;
    this._mqttTopic = config.mqttTopic;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
    this._wifiAllowListsMacs = config.wifiAllowListsMacs;
    this._wifiEnabled = config.wifiEnabled;
    this._wifiFlushFrequency = config.wifiFlushFrequency;
    this._wifiHysteresisEnabled = config.wifiHysteresisEnabled;
    this._wifiHysteresisThreshold = config.wifiHysteresisThreshold;
    this._wifiType = config.wifiType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ble_allow_lists_macs - computed: false, optional: true, required: false
  private _bleAllowListsMacs?: string[]; 
  public get bleAllowListsMacs() {
    return this.getListAttribute('ble_allow_lists_macs');
  }
  public set bleAllowListsMacs(value: string[]) {
    this._bleAllowListsMacs = value;
  }
  public resetBleAllowListsMacs() {
    this._bleAllowListsMacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleAllowListsMacsInput() {
    return this._bleAllowListsMacs;
  }

  // ble_allow_lists_uuids - computed: false, optional: true, required: false
  private _bleAllowListsUuids?: string[]; 
  public get bleAllowListsUuids() {
    return this.getListAttribute('ble_allow_lists_uuids');
  }
  public set bleAllowListsUuids(value: string[]) {
    this._bleAllowListsUuids = value;
  }
  public resetBleAllowListsUuids() {
    this._bleAllowListsUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleAllowListsUuidsInput() {
    return this._bleAllowListsUuids;
  }

  // ble_enabled - computed: false, optional: true, required: false
  private _bleEnabled?: boolean | cdktf.IResolvable; 
  public get bleEnabled() {
    return this.getBooleanAttribute('ble_enabled');
  }
  public set bleEnabled(value: boolean | cdktf.IResolvable) {
    this._bleEnabled = value;
  }
  public resetBleEnabled() {
    this._bleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleEnabledInput() {
    return this._bleEnabled;
  }

  // ble_flush_frequency - computed: false, optional: true, required: false
  private _bleFlushFrequency?: number; 
  public get bleFlushFrequency() {
    return this.getNumberAttribute('ble_flush_frequency');
  }
  public set bleFlushFrequency(value: number) {
    this._bleFlushFrequency = value;
  }
  public resetBleFlushFrequency() {
    this._bleFlushFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleFlushFrequencyInput() {
    return this._bleFlushFrequency;
  }

  // ble_hysteresis_enabled - computed: false, optional: true, required: false
  private _bleHysteresisEnabled?: boolean | cdktf.IResolvable; 
  public get bleHysteresisEnabled() {
    return this.getBooleanAttribute('ble_hysteresis_enabled');
  }
  public set bleHysteresisEnabled(value: boolean | cdktf.IResolvable) {
    this._bleHysteresisEnabled = value;
  }
  public resetBleHysteresisEnabled() {
    this._bleHysteresisEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleHysteresisEnabledInput() {
    return this._bleHysteresisEnabled;
  }

  // ble_hysteresis_threshold - computed: false, optional: true, required: false
  private _bleHysteresisThreshold?: number; 
  public get bleHysteresisThreshold() {
    return this.getNumberAttribute('ble_hysteresis_threshold');
  }
  public set bleHysteresisThreshold(value: number) {
    this._bleHysteresisThreshold = value;
  }
  public resetBleHysteresisThreshold() {
    this._bleHysteresisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleHysteresisThresholdInput() {
    return this._bleHysteresisThreshold;
  }

  // ble_type - computed: false, optional: true, required: false
  private _bleType?: string; 
  public get bleType() {
    return this.getStringAttribute('ble_type');
  }
  public set bleType(value: string) {
    this._bleType = value;
  }
  public resetBleType() {
    this._bleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleTypeInput() {
    return this._bleType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mqtt_broker_name - computed: false, optional: true, required: false
  private _mqttBrokerName?: string; 
  public get mqttBrokerName() {
    return this.getStringAttribute('mqtt_broker_name');
  }
  public set mqttBrokerName(value: string) {
    this._mqttBrokerName = value;
  }
  public resetMqttBrokerName() {
    this._mqttBrokerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttBrokerNameInput() {
    return this._mqttBrokerName;
  }

  // mqtt_enabled - computed: false, optional: true, required: false
  private _mqttEnabled?: boolean | cdktf.IResolvable; 
  public get mqttEnabled() {
    return this.getBooleanAttribute('mqtt_enabled');
  }
  public set mqttEnabled(value: boolean | cdktf.IResolvable) {
    this._mqttEnabled = value;
  }
  public resetMqttEnabled() {
    this._mqttEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttEnabledInput() {
    return this._mqttEnabled;
  }

  // mqtt_message_fields - computed: false, optional: true, required: false
  private _mqttMessageFields?: string[]; 
  public get mqttMessageFields() {
    return this.getListAttribute('mqtt_message_fields');
  }
  public set mqttMessageFields(value: string[]) {
    this._mqttMessageFields = value;
  }
  public resetMqttMessageFields() {
    this._mqttMessageFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttMessageFieldsInput() {
    return this._mqttMessageFields;
  }

  // mqtt_publishing_frequency - computed: false, optional: true, required: false
  private _mqttPublishingFrequency?: number; 
  public get mqttPublishingFrequency() {
    return this.getNumberAttribute('mqtt_publishing_frequency');
  }
  public set mqttPublishingFrequency(value: number) {
    this._mqttPublishingFrequency = value;
  }
  public resetMqttPublishingFrequency() {
    this._mqttPublishingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttPublishingFrequencyInput() {
    return this._mqttPublishingFrequency;
  }

  // mqtt_publishing_qos - computed: false, optional: true, required: false
  private _mqttPublishingQos?: number; 
  public get mqttPublishingQos() {
    return this.getNumberAttribute('mqtt_publishing_qos');
  }
  public set mqttPublishingQos(value: number) {
    this._mqttPublishingQos = value;
  }
  public resetMqttPublishingQos() {
    this._mqttPublishingQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttPublishingQosInput() {
    return this._mqttPublishingQos;
  }

  // mqtt_topic - computed: false, optional: true, required: false
  private _mqttTopic?: string; 
  public get mqttTopic() {
    return this.getStringAttribute('mqtt_topic');
  }
  public set mqttTopic(value: string) {
    this._mqttTopic = value;
  }
  public resetMqttTopic() {
    this._mqttTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttTopicInput() {
    return this._mqttTopic;
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

  // wifi_allow_lists_macs - computed: false, optional: true, required: false
  private _wifiAllowListsMacs?: string[]; 
  public get wifiAllowListsMacs() {
    return this.getListAttribute('wifi_allow_lists_macs');
  }
  public set wifiAllowListsMacs(value: string[]) {
    this._wifiAllowListsMacs = value;
  }
  public resetWifiAllowListsMacs() {
    this._wifiAllowListsMacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAllowListsMacsInput() {
    return this._wifiAllowListsMacs;
  }

  // wifi_enabled - computed: false, optional: true, required: false
  private _wifiEnabled?: boolean | cdktf.IResolvable; 
  public get wifiEnabled() {
    return this.getBooleanAttribute('wifi_enabled');
  }
  public set wifiEnabled(value: boolean | cdktf.IResolvable) {
    this._wifiEnabled = value;
  }
  public resetWifiEnabled() {
    this._wifiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiEnabledInput() {
    return this._wifiEnabled;
  }

  // wifi_flush_frequency - computed: false, optional: true, required: false
  private _wifiFlushFrequency?: number; 
  public get wifiFlushFrequency() {
    return this.getNumberAttribute('wifi_flush_frequency');
  }
  public set wifiFlushFrequency(value: number) {
    this._wifiFlushFrequency = value;
  }
  public resetWifiFlushFrequency() {
    this._wifiFlushFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiFlushFrequencyInput() {
    return this._wifiFlushFrequency;
  }

  // wifi_hysteresis_enabled - computed: false, optional: true, required: false
  private _wifiHysteresisEnabled?: boolean | cdktf.IResolvable; 
  public get wifiHysteresisEnabled() {
    return this.getBooleanAttribute('wifi_hysteresis_enabled');
  }
  public set wifiHysteresisEnabled(value: boolean | cdktf.IResolvable) {
    this._wifiHysteresisEnabled = value;
  }
  public resetWifiHysteresisEnabled() {
    this._wifiHysteresisEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiHysteresisEnabledInput() {
    return this._wifiHysteresisEnabled;
  }

  // wifi_hysteresis_threshold - computed: false, optional: true, required: false
  private _wifiHysteresisThreshold?: number; 
  public get wifiHysteresisThreshold() {
    return this.getNumberAttribute('wifi_hysteresis_threshold');
  }
  public set wifiHysteresisThreshold(value: number) {
    this._wifiHysteresisThreshold = value;
  }
  public resetWifiHysteresisThreshold() {
    this._wifiHysteresisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiHysteresisThresholdInput() {
    return this._wifiHysteresisThreshold;
  }

  // wifi_type - computed: false, optional: true, required: false
  private _wifiType?: string; 
  public get wifiType() {
    return this.getStringAttribute('wifi_type');
  }
  public set wifiType(value: string) {
    this._wifiType = value;
  }
  public resetWifiType() {
    this._wifiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiTypeInput() {
    return this._wifiType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ble_allow_lists_macs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bleAllowListsMacs),
      ble_allow_lists_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bleAllowListsUuids),
      ble_enabled: cdktf.booleanToTerraform(this._bleEnabled),
      ble_flush_frequency: cdktf.numberToTerraform(this._bleFlushFrequency),
      ble_hysteresis_enabled: cdktf.booleanToTerraform(this._bleHysteresisEnabled),
      ble_hysteresis_threshold: cdktf.numberToTerraform(this._bleHysteresisThreshold),
      ble_type: cdktf.stringToTerraform(this._bleType),
      mqtt_broker_name: cdktf.stringToTerraform(this._mqttBrokerName),
      mqtt_enabled: cdktf.booleanToTerraform(this._mqttEnabled),
      mqtt_message_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mqttMessageFields),
      mqtt_publishing_frequency: cdktf.numberToTerraform(this._mqttPublishingFrequency),
      mqtt_publishing_qos: cdktf.numberToTerraform(this._mqttPublishingQos),
      mqtt_topic: cdktf.stringToTerraform(this._mqttTopic),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      wifi_allow_lists_macs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wifiAllowListsMacs),
      wifi_enabled: cdktf.booleanToTerraform(this._wifiEnabled),
      wifi_flush_frequency: cdktf.numberToTerraform(this._wifiFlushFrequency),
      wifi_hysteresis_enabled: cdktf.booleanToTerraform(this._wifiHysteresisEnabled),
      wifi_hysteresis_threshold: cdktf.numberToTerraform(this._wifiHysteresisThreshold),
      wifi_type: cdktf.stringToTerraform(this._wifiType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ble_allow_lists_macs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bleAllowListsMacs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ble_allow_lists_uuids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bleAllowListsUuids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ble_enabled: {
        value: cdktf.booleanToHclTerraform(this._bleEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ble_flush_frequency: {
        value: cdktf.numberToHclTerraform(this._bleFlushFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_hysteresis_enabled: {
        value: cdktf.booleanToHclTerraform(this._bleHysteresisEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ble_hysteresis_threshold: {
        value: cdktf.numberToHclTerraform(this._bleHysteresisThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_type: {
        value: cdktf.stringToHclTerraform(this._bleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mqtt_broker_name: {
        value: cdktf.stringToHclTerraform(this._mqttBrokerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mqtt_enabled: {
        value: cdktf.booleanToHclTerraform(this._mqttEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mqtt_message_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mqttMessageFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mqtt_publishing_frequency: {
        value: cdktf.numberToHclTerraform(this._mqttPublishingFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mqtt_publishing_qos: {
        value: cdktf.numberToHclTerraform(this._mqttPublishingQos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mqtt_topic: {
        value: cdktf.stringToHclTerraform(this._mqttTopic),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi_allow_lists_macs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wifiAllowListsMacs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wifi_enabled: {
        value: cdktf.booleanToHclTerraform(this._wifiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wifi_flush_frequency: {
        value: cdktf.numberToHclTerraform(this._wifiFlushFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wifi_hysteresis_enabled: {
        value: cdktf.booleanToHclTerraform(this._wifiHysteresisEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wifi_hysteresis_threshold: {
        value: cdktf.numberToHclTerraform(this._wifiHysteresisThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wifi_type: {
        value: cdktf.stringToHclTerraform(this._wifiType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
