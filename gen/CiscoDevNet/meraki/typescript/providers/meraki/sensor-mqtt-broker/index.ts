// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/sensor_mqtt_broker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorMqttBrokerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true to enable MQTT broker for sensor network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/sensor_mqtt_broker#enabled SensorMqttBroker#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * MQTT Broker ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/sensor_mqtt_broker#mqtt_broker_id SensorMqttBroker#mqtt_broker_id}
  */
  readonly mqttBrokerId: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/sensor_mqtt_broker#network_id SensorMqttBroker#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/sensor_mqtt_broker meraki_sensor_mqtt_broker}
*/
export class SensorMqttBroker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_sensor_mqtt_broker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorMqttBroker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorMqttBroker to import
  * @param importFromId The id of the existing SensorMqttBroker that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/sensor_mqtt_broker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorMqttBroker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_sensor_mqtt_broker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/sensor_mqtt_broker meraki_sensor_mqtt_broker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorMqttBrokerConfig
  */
  public constructor(scope: Construct, id: string, config: SensorMqttBrokerConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_sensor_mqtt_broker',
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
    this._enabled = config.enabled;
    this._mqttBrokerId = config.mqttBrokerId;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mqtt_broker_id - computed: false, optional: false, required: true
  private _mqttBrokerId?: string; 
  public get mqttBrokerId() {
    return this.getStringAttribute('mqtt_broker_id');
  }
  public set mqttBrokerId(value: string) {
    this._mqttBrokerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttBrokerIdInput() {
    return this._mqttBrokerId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      mqtt_broker_id: cdktf.stringToTerraform(this._mqttBrokerId),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mqtt_broker_id: {
        value: cdktf.stringToHclTerraform(this._mqttBrokerId),
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
