// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_mqtt_broker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSensorMqttBrokerConfig extends cdktf.TerraformMetaArguments {
  /**
  * MQTT Broker ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_mqtt_broker#mqtt_broker_id DataMerakiSensorMqttBroker#mqtt_broker_id}
  */
  readonly mqttBrokerId: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_mqtt_broker#network_id DataMerakiSensorMqttBroker#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_mqtt_broker meraki_sensor_mqtt_broker}
*/
export class DataMerakiSensorMqttBroker extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_sensor_mqtt_broker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSensorMqttBroker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSensorMqttBroker to import
  * @param importFromId The id of the existing DataMerakiSensorMqttBroker that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_mqtt_broker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSensorMqttBroker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_sensor_mqtt_broker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/sensor_mqtt_broker meraki_sensor_mqtt_broker} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSensorMqttBrokerConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSensorMqttBrokerConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_sensor_mqtt_broker',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._mqttBrokerId = config.mqttBrokerId;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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
      mqtt_broker_id: cdktf.stringToTerraform(this._mqttBrokerId),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
